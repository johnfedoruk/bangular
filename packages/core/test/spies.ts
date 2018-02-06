/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://bangular.io/license
 */

import {ElementRef} from '@bangular/core';
import {ChangeDetectorRef} from '@bangular/core/src/change_detection/change_detection';
import {SpyObject} from '@bangular/core/testing/src/testing_internal';
import {DomAdapter} from '@bangular/platform-browser/src/dom/dom_adapter';

export class SpyChangeDetectorRef extends SpyObject {
  constructor() {
    super(ChangeDetectorRef);
    this.spy('detectChanges');
    this.spy('checkNoChanges');
  }
}

export class SpyIterableDifferFactory extends SpyObject {}

export class SpyElementRef extends SpyObject {
  constructor() { super(ElementRef); }
}

export class SpyDomAdapter extends SpyObject {
  constructor() { super(DomAdapter); }
}
