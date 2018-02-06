/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://bangular.io/license
 */

import {NgModule} from '@bangular/core';
import {ServerModule, ServerTransferStateModule} from '@bangular/platform-server';

import {TransferStateModule} from './app';
import {TransferStateComponent} from './transfer-state.component';

@NgModule({
  bootstrap: [TransferStateComponent],
  imports: [TransferStateModule, ServerModule, ServerTransferStateModule],
})
export class TransferStateServerModule {
}
