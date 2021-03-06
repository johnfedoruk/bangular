/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://bangular.io/license
 */

import {registerLocaleData} from '@bangular/common';
import {Component} from '@bangular/core';
// we need to import data for the french locale
import localeFr from './locale-fr';

// registering french data
registerLocaleData(localeFr);

// #docregion PercentPipe
@Component({
  selector: 'percent-pipe',
  template: `<div>
    <!--output '26%'-->
    <p>A: {{a | percent}}</p>

    <!--output '0,134.950%'-->
    <p>B: {{b | percent:'4.3-5'}}</p>

    <!--output '0 134,950 %'-->
    <p>B: {{b | percent:'4.3-5':'fr'}}</p>
  </div>`
})
export class PercentPipeComponent {
  a: number = 0.259;
  b: number = 1.3495;
}
// #enddocregion

// #docregion DeprecatedPercentPipe
@Component({
  selector: 'deprecated-percent-pipe',
  template: `<div>
    <!--output '25.9%'-->
    <p>A: {{a | percent}}</p>

    <!--output '0,134.95%'-->
    <p>B: {{b | percent:'4.3-5'}}</p>
  </div>`
})
export class DeprecatedPercentPipeComponent {
  a: number = 0.259;
  b: number = 1.3495;
}
// #enddocregion
