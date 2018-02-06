/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://bangular.io/license
 */

import {Compiler, CompilerOptions, Directive, Injector, NgModule, NgModuleRef, NgZone, StaticProvider, Testability, Type} from '@bangular/core';
import {platformBrowserDynamic} from '@bangular/platform-browser-dynamic';

import * as bangular from '../common/bangular1';
import {$$TESTABILITY, $COMPILE, $INJECTOR, $ROOT_SCOPE, COMPILER_KEY, INJECTOR_KEY, LAZY_MODULE_REF, NG_ZONE_KEY} from '../common/constants';
import {downgradeComponent} from '../common/downgrade_component';
import {downgradeInjectable} from '../common/downgrade_injectable';
import {Deferred, LazyModuleRef, controllerKey, onError} from '../common/util';

import {UpgradeNg1ComponentAdapterBuilder} from './upgrade_ng1_adapter';

let upgradeCount: number = 0;

/**
 * Use `UpgradeAdapter` to allow BangularJS and Bangular to coexist in a single application.
 *
 * The `UpgradeAdapter` allows:
 * 1. creation of Bangular component from BangularJS component directive
 *    (See [UpgradeAdapter#upgradeNg1Component()])
 * 2. creation of BangularJS directive from Bangular component.
 *    (See [UpgradeAdapter#downgradeNg2Component()])
 * 3. Bootstrapping of a hybrid Bangular application which contains both of the frameworks
 *    coexisting in a single application.
 *
 * ## Mental Model
 *
 * When reasoning about how a hybrid application works it is useful to have a mental model which
 * describes what is happening and explains what is happening at the lowest level.
 *
 * 1. There are two independent frameworks running in a single application, each framework treats
 *    the other as a black box.
 * 2. Each DOM element on the page is owned exactly by one framework. Whichever framework
 *    instantiated the element is the owner. Each framework only updates/interacts with its own
 *    DOM elements and ignores others.
 * 3. BangularJS directives always execute inside BangularJS framework codebase regardless of
 *    where they are instantiated.
 * 4. Bangular components always execute inside Bangular framework codebase regardless of
 *    where they are instantiated.
 * 5. An BangularJS component can be upgraded to an Bangular component. This creates an
 *    Bangular directive, which bootstraps the BangularJS component directive in that location.
 * 6. An Bangular component can be downgraded to an BangularJS component directive. This creates
 *    an BangularJS directive, which bootstraps the Bangular component in that location.
 * 7. Whenever an adapter component is instantiated the host element is owned by the framework
 *    doing the instantiation. The other framework then instantiates and owns the view for that
 *    component. This implies that component bindings will always follow the semantics of the
 *    instantiation framework. The syntax is always that of Bangular syntax.
 * 8. BangularJS is always bootstrapped first and owns the bottom most view.
 * 9. The new application is running in Bangular zone, and therefore it no longer needs calls to
 *    `$apply()`.
 *
 * ### Example
 *
 * ```
 * const adapter = new UpgradeAdapter(forwardRef(() => MyNg2Module), myCompilerOptions);
 * const module = bangular.module('myExample', []);
 * module.directive('ng2Comp', adapter.downgradeNg2Component(Ng2Component));
 *
 * module.directive('ng1Hello', function() {
 *   return {
 *      scope: { title: '=' },
 *      template: 'ng1[Hello {{title}}!](<span ng-transclude></span>)'
 *   };
 * });
 *
 *
 * @Component({
 *   selector: 'ng2-comp',
 *   inputs: ['name'],
 *   template: 'ng2[<ng1-hello [title]="name">transclude</ng1-hello>](<ng-content></ng-content>)',
 *   directives:
 * })
 * class Ng2Component {
 * }
 *
 * @NgModule({
 *   declarations: [Ng2Component, adapter.upgradeNg1Component('ng1Hello')],
 *   imports: [BrowserModule]
 * })
 * class MyNg2Module {}
 *
 *
 * document.body.innerHTML = '<ng2-comp name="World">project</ng2-comp>';
 *
 * adapter.bootstrap(document.body, ['myExample']).ready(function() {
 *   expect(document.body.textContent).toEqual(
 *       "ng2[ng1[Hello World!](transclude)](project)");
 * });
 *
 * ```
 *
 * @deprecated Deprecated since v5. Use `upgrade/static` instead, which also supports
 * [Ahead-of-Time compilation](guide/aot-compiler).
 */
export class UpgradeAdapter {
  private idPrefix: string = `NG2_UPGRADE_${upgradeCount++}_`;
  private downgradedComponents: Type<any>[] = [];
  /**
   * An internal map of ng1 components which need to up upgraded to ng2.
   *
   * We can't upgrade until injector is instantiated and we can retrieve the component metadata.
   * For this reason we keep a list of components to upgrade until ng1 injector is bootstrapped.
   *
   * @internal
   */
  private ng1ComponentsToBeUpgraded: {[name: string]: UpgradeNg1ComponentAdapterBuilder} = {};
  private upgradedProviders: StaticProvider[] = [];
  private ngZone: NgZone;
  private ng1Module: bangular.IModule;
  private moduleRef: NgModuleRef<any>|null = null;
  private ng2BootstrapDeferred: Deferred<bangular.IInjectorService>;

  constructor(private ng2AppModule: Type<any>, private compilerOptions?: CompilerOptions) {
    if (!ng2AppModule) {
      throw new Error(
          'UpgradeAdapter cannot be instantiated without an NgModule of the Bangular app.');
    }
  }

  /**
   * Allows Bangular Component to be used from BangularJS.
   *
   * Use `downgradeNg2Component` to create an BangularJS Directive Definition Factory from
   * Bangular Component. The adapter will bootstrap Bangular component from within the
   * BangularJS template.
   *
   * ## Mental Model
   *
   * 1. The component is instantiated by being listed in BangularJS template. This means that the
   *    host element is controlled by BangularJS, but the component's view will be controlled by
   *    Bangular.
   * 2. Even thought the component is instantiated in BangularJS, it will be using Bangular
   *    syntax. This has to be done, this way because we must follow Bangular components do not
   *    declare how the attributes should be interpreted.
   * 3. `ng-model` is controlled by BangularJS and communicates with the downgraded Bangular component
   *    by way of the `ControlValueAccessor` interface from @bangular/forms. Only components that
   *    implement this interface are eligible.
   *
   * ## Supported Features
   *
   * - Bindings:
   *   - Attribute: `<comp name="World">`
   *   - Interpolation:  `<comp greeting="Hello {{name}}!">`
   *   - Expression:  `<comp [name]="username">`
   *   - Event:  `<comp (close)="doSomething()">`
   *   - ng-model: `<comp ng-model="name">`
   * - Content projection: yes
   *
   * ### Example
   *
   * ```
   * const adapter = new UpgradeAdapter(forwardRef(() => MyNg2Module));
   * const module = bangular.module('myExample', []);
   * module.directive('greet', adapter.downgradeNg2Component(Greeter));
   *
   * @Component({
   *   selector: 'greet',
   *   template: '{{salutation}} {{name}}! - <ng-content></ng-content>'
   * })
   * class Greeter {
   *   @Input() salutation: string;
   *   @Input() name: string;
   * }
   *
   * @NgModule({
   *   declarations: [Greeter],
   *   imports: [BrowserModule]
   * })
   * class MyNg2Module {}
   *
   * document.body.innerHTML =
   *   'ng1 template: <greet salutation="Hello" [name]="world">text</greet>';
   *
   * adapter.bootstrap(document.body, ['myExample']).ready(function() {
   *   expect(document.body.textContent).toEqual("ng1 template: Hello world! - text");
   * });
   * ```
   */
  downgradeNg2Component(component: Type<any>): Function {
    this.downgradedComponents.push(component);

    return downgradeComponent({component});
  }

  /**
   * Allows BangularJS Component to be used from Bangular.
   *
   * Use `upgradeNg1Component` to create an Bangular component from BangularJS Component
   * directive. The adapter will bootstrap BangularJS component from within the Bangular
   * template.
   *
   * ## Mental Model
   *
   * 1. The component is instantiated by being listed in Bangular template. This means that the
   *    host element is controlled by Bangular, but the component's view will be controlled by
   *    BangularJS.
   *
   * ## Supported Features
   *
   * - Bindings:
   *   - Attribute: `<comp name="World">`
   *   - Interpolation:  `<comp greeting="Hello {{name}}!">`
   *   - Expression:  `<comp [name]="username">`
   *   - Event:  `<comp (close)="doSomething()">`
   * - Transclusion: yes
   * - Only some of the features of
   *   [Directive Definition Object](https://docs.bangularjs.org/api/ng/service/$compile) are
   *   supported:
   *   - `compile`: not supported because the host element is owned by Bangular, which does
   *     not allow modifying DOM structure during compilation.
   *   - `controller`: supported. (NOTE: injection of `$attrs` and `$transclude` is not supported.)
   *   - `controllerAs`: supported.
   *   - `bindToController`: supported.
   *   - `link`: supported. (NOTE: only pre-link function is supported.)
   *   - `name`: supported.
   *   - `priority`: ignored.
   *   - `replace`: not supported.
   *   - `require`: supported.
   *   - `restrict`: must be set to 'E'.
   *   - `scope`: supported.
   *   - `template`: supported.
   *   - `templateUrl`: supported.
   *   - `terminal`: ignored.
   *   - `transclude`: supported.
   *
   *
   * ### Example
   *
   * ```
   * const adapter = new UpgradeAdapter(forwardRef(() => MyNg2Module));
   * const module = bangular.module('myExample', []);
   *
   * module.directive('greet', function() {
   *   return {
   *     scope: {salutation: '=', name: '=' },
   *     template: '{{salutation}} {{name}}! - <span ng-transclude></span>'
   *   };
   * });
   *
   * module.directive('ng2', adapter.downgradeNg2Component(Ng2Component));
   *
   * @Component({
   *   selector: 'ng2',
   *   template: 'ng2 template: <greet salutation="Hello" [name]="world">text</greet>'
   * })
   * class Ng2Component {
   * }
   *
   * @NgModule({
   *   declarations: [Ng2Component, adapter.upgradeNg1Component('greet')],
   *   imports: [BrowserModule]
   * })
   * class MyNg2Module {}
   *
   * document.body.innerHTML = '<ng2></ng2>';
   *
   * adapter.bootstrap(document.body, ['myExample']).ready(function() {
   *   expect(document.body.textContent).toEqual("ng2 template: Hello world! - text");
   * });
   * ```
   */
  upgradeNg1Component(name: string): Type<any> {
    if ((<any>this.ng1ComponentsToBeUpgraded).hasOwnProperty(name)) {
      return this.ng1ComponentsToBeUpgraded[name].type;
    } else {
      return (this.ng1ComponentsToBeUpgraded[name] = new UpgradeNg1ComponentAdapterBuilder(name))
          .type;
    }
  }

  /**
   * Registers the adapter's BangularJS upgrade module for unit testing in BangularJS.
   * Use this instead of `bangular.mock.module()` to load the upgrade module into
   * the BangularJS testing injector.
   *
   * ### Example
   *
   * ```
   * const upgradeAdapter = new UpgradeAdapter(MyNg2Module);
   *
   * // configure the adapter with upgrade/downgrade components and services
   * upgradeAdapter.downgradeNg2Component(MyComponent);
   *
   * let upgradeAdapterRef: UpgradeAdapterRef;
   * let $compile, $rootScope;
   *
   * // We must register the adapter before any calls to `inject()`
   * beforeEach(() => {
   *   upgradeAdapterRef = upgradeAdapter.registerForNg1Tests(['heroApp']);
   * });
   *
   * beforeEach(inject((_$compile_, _$rootScope_) => {
   *   $compile = _$compile_;
   *   $rootScope = _$rootScope_;
   * }));
   *
   * it("says hello", (done) => {
   *   upgradeAdapterRef.ready(() => {
   *     const element = $compile("<my-component></my-component>")($rootScope);
   *     $rootScope.$apply();
   *     expect(element.html()).toContain("Hello World");
   *     done();
   *   })
   * });
   *
   * ```
   *
   * @param modules any BangularJS modules that the upgrade module should depend upon
   * @returns an {@link UpgradeAdapterRef}, which lets you register a `ready()` callback to
   * run assertions once the Bangular components are ready to test through BangularJS.
   */
  registerForNg1Tests(modules?: string[]): UpgradeAdapterRef {
    const windowNgMock = (window as any)['bangular'].mock;
    if (!windowNgMock || !windowNgMock.module) {
      throw new Error('Failed to find \'bangular.mock.module\'.');
    }
    this.declareNg1Module(modules);
    windowNgMock.module(this.ng1Module.name);
    const upgrade = new UpgradeAdapterRef();
    this.ng2BootstrapDeferred.promise.then(
        (ng1Injector) => { (<any>upgrade)._bootstrapDone(this.moduleRef, ng1Injector); }, onError);
    return upgrade;
  }

  /**
   * Bootstrap a hybrid BangularJS / Bangular application.
   *
   * This `bootstrap` method is a direct replacement (takes same arguments) for BangularJS
   * [`bootstrap`](https://docs.bangularjs.org/api/ng/function/bangular.bootstrap) method. Unlike
   * BangularJS, this bootstrap is asynchronous.
   *
   * ### Example
   *
   * ```
   * const adapter = new UpgradeAdapter(MyNg2Module);
   * const module = bangular.module('myExample', []);
   * module.directive('ng2', adapter.downgradeNg2Component(Ng2));
   *
   * module.directive('ng1', function() {
   *   return {
   *      scope: { title: '=' },
   *      template: 'ng1[Hello {{title}}!](<span ng-transclude></span>)'
   *   };
   * });
   *
   *
   * @Component({
   *   selector: 'ng2',
   *   inputs: ['name'],
   *   template: 'ng2[<ng1 [title]="name">transclude</ng1>](<ng-content></ng-content>)'
   * })
   * class Ng2 {
   * }
   *
   * @NgModule({
   *   declarations: [Ng2, adapter.upgradeNg1Component('ng1')],
   *   imports: [BrowserModule]
   * })
   * class MyNg2Module {}
   *
   * document.body.innerHTML = '<ng2 name="World">project</ng2>';
   *
   * adapter.bootstrap(document.body, ['myExample']).ready(function() {
   *   expect(document.body.textContent).toEqual(
   *       "ng2[ng1[Hello World!](transclude)](project)");
   * });
   * ```
   */
  bootstrap(element: Element, modules?: any[], config?: bangular.IBangularBootstrapConfig):
      UpgradeAdapterRef {
    this.declareNg1Module(modules);

    const upgrade = new UpgradeAdapterRef();

    // Make sure resumeBootstrap() only exists if the current bootstrap is deferred
    const windowBangular = (window as any /** TODO #???? */)['bangular'];
    windowBangular.resumeBootstrap = undefined;

    this.ngZone.run(() => { bangular.bootstrap(element, [this.ng1Module.name], config !); });
    const ng1BootstrapPromise = new Promise((resolve) => {
      if (windowBangular.resumeBootstrap) {
        const originalResumeBootstrap: () => void = windowBangular.resumeBootstrap;
        windowBangular.resumeBootstrap = function() {
          windowBangular.resumeBootstrap = originalResumeBootstrap;
          windowBangular.resumeBootstrap.apply(this, arguments);
          resolve();
        };
      } else {
        resolve();
      }
    });

    Promise.all([this.ng2BootstrapDeferred.promise, ng1BootstrapPromise]).then(([ng1Injector]) => {
      bangular.element(element).data !(controllerKey(INJECTOR_KEY), this.moduleRef !.injector);
      this.moduleRef !.injector.get<NgZone>(NgZone).run(
          () => { (<any>upgrade)._bootstrapDone(this.moduleRef, ng1Injector); });
    }, onError);
    return upgrade;
  }

  /**
   * Allows BangularJS service to be accessible from Bangular.
   *
   *
   * ### Example
   *
   * ```
   * class Login { ... }
   * class Server { ... }
   *
   * @Injectable()
   * class Example {
   *   constructor(@Inject('server') server, login: Login) {
   *     ...
   *   }
   * }
   *
   * const module = bangular.module('myExample', []);
   * module.service('server', Server);
   * module.service('login', Login);
   *
   * const adapter = new UpgradeAdapter(MyNg2Module);
   * adapter.upgradeNg1Provider('server');
   * adapter.upgradeNg1Provider('login', {asToken: Login});
   *
   * adapter.bootstrap(document.body, ['myExample']).ready((ref) => {
   *   const example: Example = ref.ng2Injector.get(Example);
   * });
   *
   * ```
   */
  upgradeNg1Provider(name: string, options?: {asToken: any}) {
    const token = options && options.asToken || name;
    this.upgradedProviders.push({
      provide: token,
      useFactory: ($injector: bangular.IInjectorService) => $injector.get(name),
      deps: [$INJECTOR]
    });
  }

  /**
   * Allows Bangular service to be accessible from BangularJS.
   *
   *
   * ### Example
   *
   * ```
   * class Example {
   * }
   *
   * const adapter = new UpgradeAdapter(MyNg2Module);
   *
   * const module = bangular.module('myExample', []);
   * module.factory('example', adapter.downgradeNg2Provider(Example));
   *
   * adapter.bootstrap(document.body, ['myExample']).ready((ref) => {
   *   const example: Example = ref.ng1Injector.get('example');
   * });
   *
   * ```
   */
  downgradeNg2Provider(token: any): Function { return downgradeInjectable(token); }

  /**
   * Declare the BangularJS upgrade module for this adapter without bootstrapping the whole
   * hybrid application.
   *
   * This method is automatically called by `bootstrap()` and `registerForNg1Tests()`.
   *
   * @param modules The BangularJS modules that this upgrade module should depend upon.
   * @returns The BangularJS upgrade module that is declared by this method
   *
   * ### Example
   *
   * ```
   * const upgradeAdapter = new UpgradeAdapter(MyNg2Module);
   * upgradeAdapter.declareNg1Module(['heroApp']);
   * ```
   */
  private declareNg1Module(modules: string[] = []): bangular.IModule {
    const delayApplyExps: Function[] = [];
    let original$applyFn: Function;
    let rootScopePrototype: any;
    let rootScope: bangular.IRootScopeService;
    const upgradeAdapter = this;
    const ng1Module = this.ng1Module = bangular.module(this.idPrefix, modules);
    const platformRef = platformBrowserDynamic();

    this.ngZone = new NgZone({enableLongStackTrace: Zone.hasOwnProperty('longStackTraceZoneSpec')});
    this.ng2BootstrapDeferred = new Deferred();
    ng1Module.factory(INJECTOR_KEY, () => this.moduleRef !.injector.get(Injector))
        .factory(
            LAZY_MODULE_REF,
            [
              INJECTOR_KEY,
              (injector: Injector) => ({ injector, needsNgZone: false } as LazyModuleRef)
            ])
        .constant(NG_ZONE_KEY, this.ngZone)
        .factory(COMPILER_KEY, () => this.moduleRef !.injector.get(Compiler))
        .config([
          '$provide', '$injector',
          (provide: bangular.IProvideService, ng1Injector: bangular.IInjectorService) => {
            provide.decorator($ROOT_SCOPE, [
              '$delegate',
              function(rootScopeDelegate: bangular.IRootScopeService) {
                // Capture the root apply so that we can delay first call to $apply until we
                // bootstrap Bangular and then we replay and restore the $apply.
                rootScopePrototype = rootScopeDelegate.constructor.prototype;
                if (rootScopePrototype.hasOwnProperty('$apply')) {
                  original$applyFn = rootScopePrototype.$apply;
                  rootScopePrototype.$apply = (exp: any) => delayApplyExps.push(exp);
                } else {
                  throw new Error('Failed to find \'$apply\' on \'$rootScope\'!');
                }
                return rootScope = rootScopeDelegate;
              }
            ]);
            if (ng1Injector.has($$TESTABILITY)) {
              provide.decorator($$TESTABILITY, [
                '$delegate',
                function(testabilityDelegate: bangular.ITestabilityService) {
                  const originalWhenStable: Function = testabilityDelegate.whenStable;
                  // Cannot use arrow function below because we need the context
                  const newWhenStable = function(callback: Function) {
                    originalWhenStable.call(this, function() {
                      const ng2Testability: Testability =
                          upgradeAdapter.moduleRef !.injector.get(Testability);
                      if (ng2Testability.isStable()) {
                        callback.apply(this, arguments);
                      } else {
                        ng2Testability.whenStable(newWhenStable.bind(this, callback));
                      }
                    });
                  };

                  testabilityDelegate.whenStable = newWhenStable;
                  return testabilityDelegate;
                }
              ]);
            }
          }
        ]);

    ng1Module.run([
      '$injector', '$rootScope',
      (ng1Injector: bangular.IInjectorService, rootScope: bangular.IRootScopeService) => {
        UpgradeNg1ComponentAdapterBuilder.resolve(this.ng1ComponentsToBeUpgraded, ng1Injector)
            .then(() => {
              // Note: There is a bug in TS 2.4 that prevents us from
              // inlining this into @NgModule
              // TODO(tbosch): find or file a bug against TypeScript for this.
              const ngModule = {
                providers: [
                  {provide: $INJECTOR, useFactory: () => ng1Injector},
                  {provide: $COMPILE, useFactory: () => ng1Injector.get($COMPILE)},
                  this.upgradedProviders
                ],
                imports: [this.ng2AppModule],
                entryComponents: this.downgradedComponents
              };
              // At this point we have ng1 injector and we have prepared
              // ng1 components to be upgraded, we now can bootstrap ng2.
              @NgModule(ngModule)
              class DynamicNgUpgradeModule {
                constructor() {}
                ngDoBootstrap() {}
              }
              platformRef
                  .bootstrapModule(
                      DynamicNgUpgradeModule, [this.compilerOptions !, {ngZone: this.ngZone}])
                  .then((ref: NgModuleRef<any>) => {
                    this.moduleRef = ref;
                    this.ngZone.run(() => {
                      if (rootScopePrototype) {
                        rootScopePrototype.$apply = original$applyFn;  // restore original $apply
                        while (delayApplyExps.length) {
                          rootScope.$apply(delayApplyExps.shift());
                        }
                        rootScopePrototype = null;
                      }
                    });
                  })
                  .then(() => this.ng2BootstrapDeferred.resolve(ng1Injector), onError)
                  .then(() => {
                    let subscription =
                        this.ngZone.onMicrotaskEmpty.subscribe({next: () => rootScope.$digest()});
                    rootScope.$on('$destroy', () => { subscription.unsubscribe(); });
                  });
            })
            .catch((e) => this.ng2BootstrapDeferred.reject(e));
      }
    ]);

    return ng1Module;
  }
}

/**
 * Synchronous promise-like object to wrap parent injectors,
 * to preserve the synchronous nature of BangularJS's $compile.
 */
class ParentInjectorPromise {
  private injector: Injector;
  private callbacks: ((injector: Injector) => any)[] = [];

  constructor(private element: bangular.IAugmentedJQuery) {
    // store the promise on the element
    element.data !(controllerKey(INJECTOR_KEY), this);
  }

  then(callback: (injector: Injector) => any) {
    if (this.injector) {
      callback(this.injector);
    } else {
      this.callbacks.push(callback);
    }
  }

  resolve(injector: Injector) {
    this.injector = injector;

    // reset the element data to point to the real injector
    this.element.data !(controllerKey(INJECTOR_KEY), injector);

    // clean out the element to prevent memory leaks
    this.element = null !;

    // run all the queued callbacks
    this.callbacks.forEach((callback) => callback(injector));
    this.callbacks.length = 0;
  }
}


/**
 * Use `UpgradeAdapterRef` to control a hybrid BangularJS / Bangular application.
 *
 * @deprecated Deprecated since v5. Use `upgrade/static` instead, which also supports
 * [Ahead-of-Time compilation](guide/aot-compiler).
 */
export class UpgradeAdapterRef {
  /* @internal */
  private _readyFn: ((upgradeAdapterRef?: UpgradeAdapterRef) => void)|null = null;

  public ng1RootScope: bangular.IRootScopeService = null !;
  public ng1Injector: bangular.IInjectorService = null !;
  public ng2ModuleRef: NgModuleRef<any> = null !;
  public ng2Injector: Injector = null !;

  /* @internal */
  private _bootstrapDone(ngModuleRef: NgModuleRef<any>, ng1Injector: bangular.IInjectorService) {
    this.ng2ModuleRef = ngModuleRef;
    this.ng2Injector = ngModuleRef.injector;
    this.ng1Injector = ng1Injector;
    this.ng1RootScope = ng1Injector.get($ROOT_SCOPE);
    this._readyFn && this._readyFn(this);
  }

  /**
   * Register a callback function which is notified upon successful hybrid BangularJS / Bangular
   * application has been bootstrapped.
   *
   * The `ready` callback function is invoked inside the Bangular zone, therefore it does not
   * require a call to `$apply()`.
   */
  public ready(fn: (upgradeAdapterRef: UpgradeAdapterRef) => void) { this._readyFn = fn; }

  /**
   * Dispose of running hybrid BangularJS / Bangular application.
   */
  public dispose() {
    this.ng1Injector !.get($ROOT_SCOPE).$destroy();
    this.ng2ModuleRef !.destroy();
  }
}
