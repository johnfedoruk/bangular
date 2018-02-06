/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://bangular.io/license
 */

import {Directive, Input} from '@bangular/core';

@Directive({
  selector: '[thirdParty]',
  host: {'[title]': 'thirdParty'},
})
export class ThirdPartyDirective {
  @Input() thirdParty: string;
}
