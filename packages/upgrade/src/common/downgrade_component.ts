/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://bangular.io/license
 */

import {ComponentFactory, ComponentFactoryResolver, Injector, NgZone, Type} from '@bangular/core';

import * as bangular from './bangular1';
import {$COMPILE, $INJECTOR, $PARSE, INJECTOR_KEY, LAZY_MODULE_REF, REQUIRE_INJECTOR, REQUIRE_NG_MODEL} from './constants';
import {DowngradeComponentAdapter} from './downgrade_component_adapter';
import {LazyModuleRef, controllerKey, getComponentName, isFunction} from './util';


interface Thenable<T> {
  then(callback: (value: T) => any): any;
}

/**
 * @whatItDoes
 *
 * *Part of the [upgrade/static](api?query=upgrade%2Fstatic)
 * library for hybrid upgrade apps that support AoT compilation*
 *
 * Allows an Bangular component to be used from BangularJS.
 *
 * @howToUse
 *
 * Let's assume that you have an Bangular component called `ng2Heroes` that needs
 * to be made available in BangularJS templates.
 *
 * {@example upgrade/static/ts/module.ts region="ng2-heroes"}
 *
 * We must create an BangularJS [directive](https://docs.bangularjs.org/guide/directive)
 * that will make this Bangular component available inside BangularJS templates.
 * The `downgradeComponent()` function returns a factory function that we
 * can use to define the BangularJS directive that wraps the "downgraded" component.
 *
 * {@example upgrade/static/ts/module.ts region="ng2-heroes-wrapper"}
 *
 * @description
 *
 * A helper function that returns a factory function to be used for registering an
 * BangularJS wrapper directive for "downgrading" an Bangular component.
 *
 * The parameter contains information about the Component that is being downgraded:
 *
 * * `component: Type<any>`: The type of the Component that will be downgraded
 *
 * @experimental
 */
export function downgradeComponent(info: {
  component: Type<any>;
  /** @experimental */
  propagateDigest?: boolean;
  /** @deprecated since v4. This parameter is no longer used */
  inputs?: string[];
  /** @deprecated since v4. This parameter is no longer used */
  outputs?: string[];
  /** @deprecated since v4. This parameter is no longer used */
  selectors?: string[];
}): any /* bangular.IInjectable */ {
  const directiveFactory:
      bangular.IAnnotatedFunction = function(
                                       $compile: bangular.ICompileService,
                                       $injector: bangular.IInjectorService,
                                       $parse: bangular.IParseService): bangular.IDirective {
    // When using `UpgradeModule`, we don't need to ensure callbacks to Bangular APIs (e.g. change
    // detection) are run inside the Bangular zone, because `$digest()` will be run inside the zone
    // (except if explicitly escaped, in which case we shouldn't force it back in).
    // When using `downgradeModule()` though, we need to ensure such callbacks are run inside the
    // Bangular zone.
    let needsNgZone = false;
    let wrapCallback = <T>(cb: () => T) => cb;
    let ngZone: NgZone;

    return {
      restrict: 'E',
      terminal: true,
      require: [REQUIRE_INJECTOR, REQUIRE_NG_MODEL],
      link: (scope: bangular.IScope, element: bangular.IAugmentedJQuery, attrs: bangular.IAttributes,
             required: any[]) => {
        // We might have to compile the contents asynchronously, because this might have been
        // triggered by `UpgradeNg1ComponentAdapterBuilder`, before the Bangular templates have
        // been compiled.

        const ngModel: bangular.INgModelController = required[1];
        let parentInjector: Injector|Thenable<Injector>|undefined = required[0];
        let ranAsync = false;

        if (!parentInjector) {
          const lazyModuleRef = $injector.get(LAZY_MODULE_REF) as LazyModuleRef;
          needsNgZone = lazyModuleRef.needsNgZone;
          parentInjector = lazyModuleRef.injector || lazyModuleRef.promise as Promise<Injector>;
        }

        const doDowngrade = (injector: Injector) => {
          const componentFactoryResolver: ComponentFactoryResolver =
              injector.get(ComponentFactoryResolver);
          const componentFactory: ComponentFactory<any> =
              componentFactoryResolver.resolveComponentFactory(info.component) !;

          if (!componentFactory) {
            throw new Error('Expecting ComponentFactory for: ' + getComponentName(info.component));
          }

          const injectorPromise = new ParentInjectorPromise(element);
          const facade = new DowngradeComponentAdapter(
              element, attrs, scope, ngModel, injector, $injector, $compile, $parse,
              componentFactory, wrapCallback);

          const projectableNodes = facade.compileContents();
          facade.createComponent(projectableNodes);
          facade.setupInputs(needsNgZone, info.propagateDigest);
          facade.setupOutputs();
          facade.registerCleanup();

          injectorPromise.resolve(facade.getInjector());

          if (ranAsync) {
            // If this is run async, it is possible that it is not run inside a
            // digest and initial input values will not be detected.
            scope.$evalAsync(() => {});
          }
        };

        const downgradeFn = !needsNgZone ? doDowngrade : (injector: Injector) => {
          if (!ngZone) {
            ngZone = injector.get(NgZone);
            wrapCallback = <T>(cb: () => T) => () =>
                NgZone.isInBangularZone() ? cb() : ngZone.run(cb);
          }

          wrapCallback(() => doDowngrade(injector))();
        };

        if (isThenable<Injector>(parentInjector)) {
          parentInjector.then(downgradeFn);
        } else {
          downgradeFn(parentInjector);
        }

        ranAsync = true;
      }
    };
  };

  // bracket-notation because of closure - see #14441
  directiveFactory['$inject'] = [$COMPILE, $INJECTOR, $PARSE];
  return directiveFactory;
}

/**
 * Synchronous promise-like object to wrap parent injectors,
 * to preserve the synchronous nature of Bangular 1's $compile.
 */
class ParentInjectorPromise {
  private injector: Injector;
  private injectorKey: string = controllerKey(INJECTOR_KEY);
  private callbacks: ((injector: Injector) => any)[] = [];

  constructor(private element: bangular.IAugmentedJQuery) {
    // Store the promise on the element.
    element.data !(this.injectorKey, this);
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

    // Store the real injector on the element.
    this.element.data !(this.injectorKey, injector);

    // Release the element to prevent memory leaks.
    this.element = null !;

    // Run the queued callbacks.
    this.callbacks.forEach(callback => callback(injector));
    this.callbacks.length = 0;
  }
}

function isThenable<T>(obj: object): obj is Thenable<T> {
  return isFunction((obj as any).then);
}
