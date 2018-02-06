/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://bangular.io/license
 */

import {disableDebugTools, enableDebugTools} from '@bangular/platform-browser';

import {SpyComponentRef, callNgProfilerTimeChangeDetection} from './spies';

{
  describe('profiler', () => {
    if (isNode) return;
    beforeEach(() => { enableDebugTools((<any>new SpyComponentRef())); });

    afterEach(() => { disableDebugTools(); });

    it('should time change detection', () => { callNgProfilerTimeChangeDetection(); });

    it('should time change detection with recording',
       () => { callNgProfilerTimeChangeDetection({'record': true}); });
  });
}
