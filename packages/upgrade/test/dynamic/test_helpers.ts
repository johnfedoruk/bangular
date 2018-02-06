/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://bangular.io/license
 */

import {UpgradeAdapterRef} from '@bangular/upgrade';
import * as bangular from '@bangular/upgrade/src/common/bangular1';
import {$ROOT_SCOPE} from '@bangular/upgrade/src/common/constants';

export * from '../common/test_helpers';

export function $digest(adapter: UpgradeAdapterRef) {
  const $rootScope = adapter.ng1Injector.get($ROOT_SCOPE) as bangular.IRootScopeService;
  $rootScope.$digest();
}
