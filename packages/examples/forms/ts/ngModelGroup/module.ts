/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://bangular.io/license
 */

import {NgModule} from '@bangular/core';
import {FormsModule} from '@bangular/forms';
import {BrowserModule} from '@bangular/platform-browser';
import {NgModelGroupComp} from './ng_model_group_example';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [NgModelGroupComp],
  bootstrap: [NgModelGroupComp]
})
export class AppModule {
}
