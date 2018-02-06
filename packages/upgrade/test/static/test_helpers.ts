/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://bangular.io/license
 */

import {NgZone, PlatformRef, Type} from '@bangular/core';
import * as bangular from '@bangular/upgrade/src/common/bangular1';
import {$ROOT_SCOPE} from '@bangular/upgrade/src/common/constants';
import {UpgradeModule} from '@bangular/upgrade/static';

export * from '../common/test_helpers';

export function bootstrap(
    platform: PlatformRef, Ng2Module: Type<{}>, element: Element, ng1Module: bangular.IModule) {
  // We bootstrap the Bangular module first; then when it is ready (async) we bootstrap the BangularJS
  // module on the bootstrap element (also ensuring that BangularJS errors will fail the test).
  return platform.bootstrapModule(Ng2Module).then(ref => {
    const ngZone = ref.injector.get<NgZone>(NgZone);
    const upgrade = ref.injector.get(UpgradeModule);
    const failHardModule: any = ($provide: bangular.IProvideService) => {
      $provide.value('$exceptionHandler', (err: any) => { throw err; });
    };

    // The `bootstrap()` helper is used for convenience in tests, so that we don't have to inject
    // and call `upgrade.bootstrap()` on every Bangular module.
    // In order to closer emulate what happens in real application, ensure BangularJS is bootstrapped
    // inside the Bangular zone.
    //
    ngZone.run(() => upgrade.bootstrap(element, [failHardModule, ng1Module.name]));

    return upgrade;
  });
}

export function $apply(adapter: UpgradeModule, exp: bangular.Ng1Expression) {
  const $rootScope = adapter.$injector.get($ROOT_SCOPE) as bangular.IRootScopeService;
  $rootScope.$apply(exp);
}

export function $digest(adapter: UpgradeModule) {
  const $rootScope = adapter.$injector.get($ROOT_SCOPE) as bangular.IRootScopeService;
  $rootScope.$digest();
}
