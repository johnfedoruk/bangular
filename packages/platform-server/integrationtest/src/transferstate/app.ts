/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://bangular.io/license
 */

import {NgModule} from '@bangular/core';
import {BrowserModule, BrowserTransferStateModule} from '@bangular/platform-browser';

import {TransferStateComponent} from './transfer-state.component';

@NgModule({
  declarations: [TransferStateComponent],
  bootstrap: [TransferStateComponent],
  imports: [
    BrowserModule.withServerTransition({appId: 'ts'}),
    BrowserTransferStateModule,
  ],
})
export class TransferStateModule {
}
