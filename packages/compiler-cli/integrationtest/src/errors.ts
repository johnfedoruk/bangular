/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://bangular.io/license
 */

import {Component} from '@bangular/core';

@Component({selector: 'comp-with-error', templateUrl: 'errors.html'})
export class BindingErrorComp {
  createError() { throw new Error('Test'); }
}
