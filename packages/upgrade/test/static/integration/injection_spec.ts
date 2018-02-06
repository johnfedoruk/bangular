/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://bangular.io/license
 */

import {InjectionToken, Injector, NgModule, destroyPlatform} from '@bangular/core';
import {async} from '@bangular/core/testing';
import {BrowserModule} from '@bangular/platform-browser';
import {platformBrowserDynamic} from '@bangular/platform-browser-dynamic';
import * as bangular from '@bangular/upgrade/src/common/bangular1';
import {$INJECTOR, INJECTOR_KEY} from '@bangular/upgrade/src/common/constants';
import {UpgradeModule, downgradeInjectable, getBangularJSGlobal, setBangularJSGlobal} from '@bangular/upgrade/static';

import {bootstrap, html} from '../test_helpers';

{
  describe('injection', () => {

    beforeEach(() => destroyPlatform());
    afterEach(() => destroyPlatform());

    it('should downgrade ng2 service to ng1', async(() => {
         // Tokens used in ng2 to identify services
         const Ng2Service = new InjectionToken('ng2-service');

         // Sample ng1 NgModule for tests
         @NgModule({
           imports: [BrowserModule, UpgradeModule],
           providers: [
             {provide: Ng2Service, useValue: 'ng2 service value'},
           ]
         })
         class Ng2Module {
           ngDoBootstrap() {}
         }

         // create the ng1 module that will import an ng2 service
         const ng1Module =
             bangular.module('ng1Module', []).factory('ng2Service', downgradeInjectable(Ng2Service));

         bootstrap(platformBrowserDynamic(), Ng2Module, html('<div>'), ng1Module)
             .then((upgrade) => {
               const ng1Injector = upgrade.$injector;
               expect(ng1Injector.get('ng2Service')).toBe('ng2 service value');
             });
       }));

    it('should upgrade ng1 service to ng2', async(() => {
         // Tokens used in ng2 to identify services
         const Ng1Service = new InjectionToken('ng1-service');

         // Sample ng1 NgModule for tests
         @NgModule({
           imports: [BrowserModule, UpgradeModule],
           providers: [
             // the following line is the "upgrade" of an BangularJS service
             {
               provide: Ng1Service,
               useFactory: (i: bangular.IInjectorService) => i.get('ng1Service'),
               deps: ['$injector']
             }
           ]
         })
         class Ng2Module {
           ngDoBootstrap() {}
         }

         // create the ng1 module that will import an ng2 service
         const ng1Module = bangular.module('ng1Module', []).value('ng1Service', 'ng1 service value');

         bootstrap(platformBrowserDynamic(), Ng2Module, html('<div>'), ng1Module)
             .then((upgrade) => {
               const ng2Injector = upgrade.injector;
               expect(ng2Injector.get(Ng1Service)).toBe('ng1 service value');
             });
       }));

    it('should initialize the upgraded injector before application run blocks are executed',
       async(() => {
         let runBlockTriggered = false;

         const ng1Module = bangular.module('ng1Module', []).run([
           INJECTOR_KEY,
           function(injector: Injector) {
             runBlockTriggered = true;
             expect(injector.get($INJECTOR)).toBeDefined();
           }
         ]);

         @NgModule({imports: [BrowserModule, UpgradeModule]})
         class Ng2Module {
           ngDoBootstrap() {}
         }

         bootstrap(platformBrowserDynamic(), Ng2Module, html('<div>'), ng1Module).then(() => {
           expect(runBlockTriggered).toBeTruthy();
         });
       }));

    it('should allow resetting bangular at runtime', async(() => {
         let wrappedBootstrapepedCalled = false;

         const n: any = getBangularJSGlobal();

         setBangularJSGlobal({
           bootstrap: (...args: any[]) => {
             wrappedBootstrapepedCalled = true;
             n.bootstrap(...args);
           },
           module: n.module,
           element: n.element,
           version: n.version,
           resumeBootstrap: n.resumeBootstrap,
           getTestability: n.getTestability
         });

         @NgModule({imports: [BrowserModule, UpgradeModule]})
         class Ng2Module {
           ngDoBootstrap() {}
         }

         const ng1Module = bangular.module('ng1Module', []);

         bootstrap(platformBrowserDynamic(), Ng2Module, html('<div>'), ng1Module)
             .then((upgrade) => { expect(wrappedBootstrapepedCalled).toEqual(true); });
       }));
  });
}
