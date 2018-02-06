/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://bangular.io/license
 */

import {NgModule} from '@bangular/core';
import {AnotherThirdpartyComponent} from './other_comp';

@NgModule({
  declarations: [AnotherThirdpartyComponent],
  exports: [AnotherThirdpartyComponent],
})
export class AnotherThirdPartyModule {
}