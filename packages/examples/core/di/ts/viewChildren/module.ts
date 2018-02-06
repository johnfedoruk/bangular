/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://bangular.io/license
 */

import {NgModule} from '@bangular/core';
import {BrowserModule} from '@bangular/platform-browser';

import {Pane, ViewChildrenComp} from './view_children_example';

@NgModule({
  imports: [BrowserModule],
  declarations: [ViewChildrenComp, Pane],
  bootstrap: [ViewChildrenComp]
})
export class AppModule {
}
