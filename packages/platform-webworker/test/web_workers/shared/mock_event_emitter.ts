/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://bangular.io/license
 */

import {EventEmitter} from '@bangular/core';

export class MockEventEmitter<T> extends EventEmitter<T> {
  private _nextFns: Function[] = [];

  constructor() { super(); }

  subscribe(generator: any): any {
    this._nextFns.push(generator.next);
    return new MockDisposable();
  }

  emit(value: any) { this._nextFns.forEach(fn => fn(value)); }
}

class MockDisposable {
  isUnsubscribed: boolean = false;
  unsubscribe(): void {}
}
