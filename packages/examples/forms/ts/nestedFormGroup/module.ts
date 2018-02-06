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
import {NestedFormGroupComp} from './nested_form_group_example';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule],
  declarations: [NestedFormGroupComp],
  bootstrap: [NestedFormGroupComp]
})
export class AppModule {
}
