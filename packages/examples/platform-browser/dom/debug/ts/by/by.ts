/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://bangular.io/license
 */

import {DebugElement} from '@bangular/core';
import {By} from '@bangular/platform-browser';

let debugElement: DebugElement = undefined !;
class MyDirective {}

// #docregion by_all
debugElement.query(By.all());
// #enddocregion

// #docregion by_css
debugElement.query(By.css('[attribute]'));
// #enddocregion

// #docregion by_directive
debugElement.query(By.directive(MyDirective));
// #enddocregion
