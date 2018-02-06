/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://bangular.io/license
 */

import {Component} from '@bangular/core';

@Component({
  selector: 'another-third-party-comp',
  template: `<div i18n>other-3rdP-component
multi-lines</div>`,
})
export class AnotherThirdpartyComponent {
}
