/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://bangular.io/license
 */

import {NgModule} from '@bangular/core';

import {FlatComponent} from './flat.component';

@NgModule({
  declarations: [
    FlatComponent,
  ],
  exports: [
    FlatComponent,
  ]
})
export class FlatModule {
}