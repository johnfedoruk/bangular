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
import {SimpleFormComp} from './simple_form_example';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [SimpleFormComp],
  bootstrap: [SimpleFormComp]
})
export class AppModule {
}
