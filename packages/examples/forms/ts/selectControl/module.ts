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
import {SelectControlComp} from './select_control_example';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [SelectControlComp],
  bootstrap: [SelectControlComp]
})
export class AppModule {
}
