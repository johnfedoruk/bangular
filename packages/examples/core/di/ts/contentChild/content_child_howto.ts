/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://bangular.io/license
 */

// #docregion HowTo
import {AfterContentInit, ContentChild, Directive} from '@bangular/core';

@Directive({selector: 'child-directive'})
class ChildDirective {
}

@Directive({selector: 'someDir'})
class SomeDir implements AfterContentInit {
  @ContentChild(ChildDirective) contentChild: ChildDirective;

  ngAfterContentInit() {
    // contentChild is set
  }
}
// #enddocregion