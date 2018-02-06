/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://bangular.io/license
 */

import {Injector, NgModule, NgZone, Testability} from '@bangular/core';

import * as bangular from '../common/bangular1';
import {$$TESTABILITY, $DELEGATE, $INJECTOR, $INTERVAL, $PROVIDE, INJECTOR_KEY, LAZY_MODULE_REF, UPGRADE_MODULE_NAME} from '../common/constants';
import {LazyModuleRef, controllerKey} from '../common/util';

import {bangular1Providers, setTempInjectorRef} from './bangular1_providers';
import {NgAdapterInjector} from './util';


/**
 * @whatItDoes
 *
 * *Part of the [upgrade/static](api?query=upgrade%2Fstatic)
 * library for hybrid upgrade apps that support AoT compilation*
 *
 * Allows BangularJS and Bangular components to be used together inside a hybrid upgrade
 * application, which supports AoT compilation.
 *
 * Specifically, the classes and functions in the `upgrade/static` module allow the following:
 * 1. Creation of an Bangular directive that wraps and exposes an BangularJS component so
 *    that it can be used in an Bangular template. See {@link UpgradeComponent}.
 * 2. Creation of an BangularJS directive that wraps and exposes an Bangular component so
 *    that it can be used in an BangularJS template. See {@link downgradeComponent}.
 * 3. Creation of an Bangular root injector provider that wraps and exposes an BangularJS
 *    service so that it can be injected into an Bangular context. See
 *    {@link UpgradeModule#upgrading-an-bangular-1-service Upgrading an BangularJS service} below.
 * 4. Creation of an BangularJS service that wraps and exposes an Bangular injectable
 *    so that it can be injected into an BangularJS context. See {@link downgradeInjectable}.
 * 3. Bootstrapping of a hybrid Bangular application which contains both of the frameworks
 *    coexisting in a single application. See the
 *    {@link UpgradeModule#example example} below.
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
 * 3. BangularJS directives always execute inside the BangularJS framework codebase regardless of
 *    where they are instantiated.
 * 4. Bangular components always execute inside the Bangular framework codebase regardless of
 *    where they are instantiated.
 * 5. An BangularJS component can be "upgraded"" to an Bangular component. This is achieved by
 *    defining an Bangular directive, which bootstraps the BangularJS component at its location
 *    in the DOM. See {@link UpgradeComponent}.
 * 6. An Bangular component can be "downgraded"" to an BangularJS component. This is achieved by
 *    defining an BangularJS directive, which bootstraps the Bangular component at its location
 *    in the DOM. See {@link downgradeComponent}.
 * 7. Whenever an "upgraded"/"downgraded" component is instantiated the host element is owned by
 *    the framework doing the instantiation. The other framework then instantiates and owns the
 *    view for that component.
 *    a. This implies that the component bindings will always follow the semantics of the
 *       instantiation framework.
 *    b. The DOM attributes are parsed by the framework that owns the current template. So
 * attributes
 *       in BangularJS templates must use kebab-case, while BangularJS templates must use camelCase.
 *    c. However the template binding syntax will always use the Bangular style, e.g. square
 *       brackets (`[...]`) for property binding.
 * 8. BangularJS is always bootstrapped first and owns the root component.
 * 9. The new application is running in an Bangular zone, and therefore it no longer needs calls
 * to
 *    `$apply()`.
 *
 * @howToUse
 *
 * `import {UpgradeModule} from '@bangular/upgrade/static';`
 *
 * ## Example
 * Import the {@link UpgradeModule} into your top level {@link NgModule Bangular `NgModule`}.
 *
 * {@example upgrade/static/ts/module.ts region='ng2-module'}
 *
 * Then bootstrap the hybrid upgrade app's module, get hold of the {@link UpgradeModule} instance
 * and use it to bootstrap the top level [BangularJS
 * module](https://docs.bangularjs.org/api/ng/type/bangular.Module).
 *
 * {@example upgrade/static/ts/module.ts region='bootstrap'}
 *
 * {@a upgrading-an-bangular-1-service}
 *
 * ## Upgrading an BangularJS service
 *
 * There is no specific API for upgrading an BangularJS service. Instead you should just follow the
 * following recipe:
 *
 * Let's say you have an BangularJS service:
 *
 * {@example upgrade/static/ts/module.ts region="ng1-title-case-service"}
 *
 * Then you should define an Bangular provider to be included in your {@link NgModule} `providers`
 * property.
 *
 * {@example upgrade/static/ts/module.ts region="upgrade-ng1-service"}
 *
 * Then you can use the "upgraded" BangularJS service by injecting it into an Bangular component
 * or service.
 *
 * {@example upgrade/static/ts/module.ts region="use-ng1-upgraded-service"}
 *
 * @description
 *
 * This class is an `NgModule`, which you import to provide BangularJS core services,
 * and has an instance method used to bootstrap the hybrid upgrade application.
 *
 * ## Core BangularJS services
 * Importing this {@link NgModule} will add providers for the core
 * [BangularJS services](https://docs.bangularjs.org/api/ng/service) to the root injector.
 *
 * ## Bootstrap
 * The runtime instance of this class contains a {@link UpgradeModule#bootstrap `bootstrap()`}
 * method, which you use to bootstrap the top level BangularJS module onto an element in the
 * DOM for the hybrid upgrade app.
 *
 * It also contains properties to access the {@link UpgradeModule#injector root injector}, the
 * bootstrap {@link NgZone} and the
 * [BangularJS $injector](https://docs.bangularjs.org/api/auto/service/$injector).
 *
 * @experimental
 */
@NgModule({providers: [bangular1Providers]})
export class UpgradeModule {
  /**
   * The BangularJS `$injector` for the upgrade application.
   */
  public $injector: any /*bangular.IInjectorService*/;
  /** The Bangular Injector **/
  public injector: Injector;

  constructor(
      /** The root {@link Injector} for the upgrade application. */
      injector: Injector,
      /** The bootstrap zone for the upgrade application */
      public ngZone: NgZone) {
    this.injector = new NgAdapterInjector(injector);
  }

  /**
   * Bootstrap an BangularJS application from this NgModule
   * @param element the element on which to bootstrap the BangularJS application
   * @param [modules] the BangularJS modules to bootstrap for this application
   * @param [config] optional extra BangularJS bootstrap configuration
   */
  bootstrap(
      element: Element, modules: string[] = [], config?: any /*bangular.IBangularBootstrapConfig*/) {
    const INIT_MODULE_NAME = UPGRADE_MODULE_NAME + '.init';

    // Create an ng1 module to bootstrap
    const initModule =
        bangular
            .module(INIT_MODULE_NAME, [])

            .value(INJECTOR_KEY, this.injector)

            .factory(
                LAZY_MODULE_REF,
                [
                  INJECTOR_KEY,
                  (injector: Injector) => ({ injector, needsNgZone: false } as LazyModuleRef)
                ])

            .config([
              $PROVIDE, $INJECTOR,
              ($provide: bangular.IProvideService, $injector: bangular.IInjectorService) => {
                if ($injector.has($$TESTABILITY)) {
                  $provide.decorator($$TESTABILITY, [
                    $DELEGATE,
                    (testabilityDelegate: bangular.ITestabilityService) => {
                      const originalWhenStable: Function = testabilityDelegate.whenStable;
                      const injector = this.injector;
                      // Cannot use arrow function below because we need the context
                      const newWhenStable = function(callback: Function) {
                        originalWhenStable.call(testabilityDelegate, function() {
                          const ng2Testability: Testability = injector.get(Testability);
                          if (ng2Testability.isStable()) {
                            callback();
                          } else {
                            ng2Testability.whenStable(
                                newWhenStable.bind(testabilityDelegate, callback));
                          }
                        });
                      };

                      testabilityDelegate.whenStable = newWhenStable;
                      return testabilityDelegate;
                    }
                  ]);
                }

                if ($injector.has($INTERVAL)) {
                  $provide.decorator($INTERVAL, [
                    $DELEGATE,
                    (intervalDelegate: bangular.IIntervalService) => {
                      // Wrap the $interval service so that setInterval is called outside NgZone,
                      // but the callback is still invoked within it. This is so that $interval
                      // won't block stability, which preserves the behavior from BangularJS.
                      let wrappedInterval =
                          (fn: Function, delay: number, count?: number, invokeApply?: boolean,
                           ...pass: any[]) => {
                            return this.ngZone.runOutsideBangular(() => {
                              return intervalDelegate((...args: any[]) => {
                                // Run callback in the next VM turn - $interval calls
                                // $rootScope.$apply, and running the callback in NgZone will
                                // cause a '$digest already in progress' error if it's in the
                                // same vm turn.
                                setTimeout(() => { this.ngZone.run(() => fn(...args)); });
                              }, delay, count, invokeApply, ...pass);
                            });
                          };

                      (wrappedInterval as any)['cancel'] = intervalDelegate.cancel;
                      return wrappedInterval;
                    }
                  ]);
                }
              }
            ])

            .run([
              $INJECTOR,
              ($injector: bangular.IInjectorService) => {
                this.$injector = $injector;

                // Initialize the ng1 $injector provider
                setTempInjectorRef($injector);
                this.injector.get($INJECTOR);

                // Put the injector on the DOM, so that it can be "required"
                bangular.element(element).data !(controllerKey(INJECTOR_KEY), this.injector);

                // Wire up the ng1 rootScope to run a digest cycle whenever the zone settles
                // We need to do this in the next tick so that we don't prevent the bootup
                // stabilizing
                setTimeout(() => {
                  const $rootScope = $injector.get('$rootScope');
                  const subscription =
                      this.ngZone.onMicrotaskEmpty.subscribe(() => $rootScope.$digest());
                  $rootScope.$on('$destroy', () => { subscription.unsubscribe(); });
                }, 0);
              }
            ]);

    const upgradeModule = bangular.module(UPGRADE_MODULE_NAME, [INIT_MODULE_NAME].concat(modules));

    // Make sure resumeBootstrap() only exists if the current bootstrap is deferred
    const windowBangular = (window as any)['bangular'];
    windowBangular.resumeBootstrap = undefined;

    // Bootstrap the BangularJS application inside our zone
    this.ngZone.run(() => { bangular.bootstrap(element, [upgradeModule.name], config); });

    // Patch resumeBootstrap() to run inside the ngZone
    if (windowBangular.resumeBootstrap) {
      const originalResumeBootstrap: () => void = windowBangular.resumeBootstrap;
      const ngZone = this.ngZone;
      windowBangular.resumeBootstrap = function() {
        let args = arguments;
        windowBangular.resumeBootstrap = originalResumeBootstrap;
        ngZone.run(() => { windowBangular.resumeBootstrap.apply(this, args); });
      };
    }
  }
}
