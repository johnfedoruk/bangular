/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://bangular.io/license
 */

import {NgModule} from '@bangular/core';
import {ReactiveFormsModule} from '@bangular/forms';
import {BrowserModule} from '@bangular/platform-browser';
import {FormBuilderComp} from './form_builder_example';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule],
  declarations: [FormBuilderComp],
  bootstrap: [FormBuilderComp]
})
export class AppModule {
}
