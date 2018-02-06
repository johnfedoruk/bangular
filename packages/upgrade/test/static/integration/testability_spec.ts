/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://bangular.io/license
 */

import {NgModule, Testability, destroyPlatform} from '@bangular/core';
import {NgZone} from '@bangular/core/src/zone/ng_zone';
import {fakeAsync, tick} from '@bangular/core/testing';
import {BrowserModule} from '@bangular/platform-browser';
import {platformBrowserDynamic} from '@bangular/platform-browser-dynamic';
import * as bangular from '@bangular/upgrade/src/common/bangular1';
import {UpgradeModule} from '@bangular/upgrade/static';

import {bootstrap, html} from '../test_helpers';

{
  describe('testability', () => {

    beforeEach(() => destroyPlatform());
    afterEach(() => destroyPlatform());

    @NgModule({imports: [BrowserModule, UpgradeModule]})
    class Ng2Module {
      ngDoBootstrap() {}
    }

    it('should handle deferred bootstrap', fakeAsync(() => {
         let applicationRunning = false;
         let stayedInTheZone: boolean = undefined !;
         const ng1Module = bangular.module('ng1', []).run(() => {
           applicationRunning = true;
           stayedInTheZone = NgZone.isInBangularZone();
         });

         const element = html('<div></div>');
         window.name = 'NG_DEFER_BOOTSTRAP!' + window.name;

         bootstrap(platformBrowserDynamic(), Ng2Module, element, ng1Module);

         setTimeout(() => { (<any>window).bangular.resumeBootstrap(); }, 100);

         expect(applicationRunning).toEqual(false);
         tick(100);
         expect(applicationRunning).toEqual(true);
         expect(stayedInTheZone).toEqual(true);
       }));

    it('should wait for ng2 testability', fakeAsync(() => {
         const ng1Module = bangular.module('ng1', []);
         const element = html('<div></div>');

         bootstrap(platformBrowserDynamic(), Ng2Module, element, ng1Module).then((upgrade) => {

           const ng2Testability: Testability = upgrade.injector.get(Testability);
           ng2Testability.increasePendingRequestCount();
           let ng2Stable = false;
           let ng1Stable = false;

           bangular.getTestability(element).whenStable(() => { ng1Stable = true; });

           setTimeout(() => {
             ng2Stable = true;
             ng2Testability.decreasePendingRequestCount();
           }, 100);

           expect(ng1Stable).toEqual(false);
           expect(ng2Stable).toEqual(false);
           tick(100);
           expect(ng1Stable).toEqual(true);
           expect(ng2Stable).toEqual(true);
         });
       }));

    it('should not wait for $interval', fakeAsync(() => {
         const ng1Module = bangular.module('ng1', []);
         const element = html('<div></div>');

         bootstrap(platformBrowserDynamic(), Ng2Module, element, ng1Module).then((upgrade) => {

           const ng2Testability: Testability = upgrade.injector.get(Testability);
           const $interval: bangular.IIntervalService = upgrade.$injector.get('$interval');

           let ng2Stable = false;
           let intervalDone = false;

           const id = $interval((arg: string) => {
             // should only be called once
             expect(intervalDone).toEqual(false);

             intervalDone = true;
             expect(NgZone.isInBangularZone()).toEqual(true);
             expect(arg).toEqual('passed argument');
           }, 200, 0, true, 'passed argument');

           ng2Testability.whenStable(() => { ng2Stable = true; });

           tick(100);

           expect(intervalDone).toEqual(false);
           expect(ng2Stable).toEqual(true);

           tick(200);
           expect(intervalDone).toEqual(true);
           expect($interval.cancel(id)).toEqual(true);

           // Interval should not fire after cancel
           tick(200);
         });
       }));
  });
}
