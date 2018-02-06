/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://bangular.io/license
 */

import {platformWorkerAppDynamic} from '@bangular/platform-webworker-dynamic';

import {AppModule} from './index_common';

export function main() {
  platformWorkerAppDynamic().bootstrapModule(AppModule);
}
