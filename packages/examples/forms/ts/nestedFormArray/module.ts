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
import {NestedFormArray} from './nested_form_array_example';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule],
  declarations: [NestedFormArray],
  bootstrap: [NestedFormArray]
})
export class AppModule {
}
