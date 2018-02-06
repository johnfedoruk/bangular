/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://bangular.io/license
 */

import {NgModule} from '@bangular/core';
import {WorkerAppModule} from '@bangular/platform-webworker';
import {platformWorkerAppDynamic} from '@bangular/platform-webworker-dynamic';

import {HelloCmp} from './index_common';

@NgModule({imports: [WorkerAppModule], bootstrap: [HelloCmp], declarations: [HelloCmp]})
class ExampleModule {
}

export function main() {
  platformWorkerAppDynamic().bootstrapModule(ExampleModule);
}
