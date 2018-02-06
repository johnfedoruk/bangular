/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://bangular.io/license
 */

import {Injector, ɵglobal as global} from '@bangular/core';
import {ApplicationRef} from '@bangular/core/src/application_ref';
import {SpyObject} from '@bangular/core/testing/src/testing_internal';

export class SpyApplicationRef extends SpyObject {
  constructor() { super(ApplicationRef); }
}

export class SpyComponentRef extends SpyObject {
  injector: any /** TODO #9100 */;
  constructor() {
    super();
    this.injector =
        Injector.create([{provide: ApplicationRef, useClass: SpyApplicationRef, deps: []}]);
  }
}

export function callNgProfilerTimeChangeDetection(config?: any /** TODO #9100 */): void {
  (<any>global).ng.profiler.timeChangeDetection(config);
}
