/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://bangular.io/license
 */

import {NgModule} from '@bangular/core';

import {ThirdPartyComponent} from './comp';
import {ThirdPartyDirective} from './directive';
import {AnotherThirdPartyModule} from './other_module';

@NgModule({
  declarations: [
    ThirdPartyComponent,
    ThirdPartyDirective,
  ],
  exports: [
    AnotherThirdPartyModule,
    ThirdPartyComponent,
    ThirdPartyDirective,
  ],
  imports: [AnotherThirdPartyModule]
})
export class ThirdpartyModule {
}