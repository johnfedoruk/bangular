/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://bangular.io/license
 */

import {Component} from '@bangular/core';

@Component({selector: 'comp-with-proj', template: '<ng-content></ng-content>'})
export class CompWithNgContent {
}

@Component({
  selector: 'main',
  template: '<comp-with-proj><span greeting="Hello world!"></span></comp-with-proj>'
})
export class ProjectingComp {
}
