/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://bangular.io/license
 */

import {Type} from '@bangular/core';
import {forwardRef, resolveForwardRef} from '@bangular/core/src/di';
import {describe, expect, it} from '@bangular/core/testing/src/testing_internal';

{
  describe('forwardRef', function() {
    it('should wrap and unwrap the reference', () => {
      const ref = forwardRef(() => String);
      expect(ref instanceof Type).toBe(true);
      expect(resolveForwardRef(ref)).toBe(String);
    });
  });
}
