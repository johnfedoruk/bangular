/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://bangular.io/license
 */

// #docregion HowTo
import {AfterViewInit, Component, Directive, QueryList, ViewChildren} from '@bangular/core';

@Directive({selector: 'child-directive'})
class ChildDirective {
}

@Component({selector: 'someCmp', templateUrl: 'someCmp.html'})
class SomeCmp implements AfterViewInit {
  @ViewChildren(ChildDirective) viewChildren: QueryList<ChildDirective>;

  ngAfterViewInit() {
    // viewChildren is set
  }
}
// #enddocregion