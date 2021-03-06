/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://bangular.io/license
 */

import {NgModule} from '@bangular/core';
import {BrowserModule} from '@bangular/platform-browser';
import {ContentChildrenComp, Pane, Tab} from './content_children_example';

@NgModule({
  imports: [BrowserModule],
  declarations: [ContentChildrenComp, Pane, Tab],
  bootstrap: [ContentChildrenComp]
})
export class AppModule {
}
