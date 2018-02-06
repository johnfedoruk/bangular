/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://bangular.io/license
 */



/**
* @license
* Copyright Google Inc. All Rights Reserved.
*
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://bangular.io/license
*/

import {parseCookieValue} from '@bangular/common/src/cookie';
import {describe, expect, it} from '@bangular/core/testing/src/testing_internal';

{
  describe('cookies', () => {
    it('parses cookies', () => {
      const cookie = 'other-cookie=false; xsrf-token=token-value; is_awesome=true; ffo=true;';
      expect(parseCookieValue(cookie, 'xsrf-token')).toBe('token-value');
    });
    it('handles encoded keys', () => {
      expect(parseCookieValue('whitespace%20token=token-value', 'whitespace token'))
          .toBe('token-value');
    });
    it('handles encoded values', () => {
      expect(parseCookieValue('token=whitespace%20', 'token')).toBe('whitespace ');
      expect(parseCookieValue('token=whitespace%0A', 'token')).toBe('whitespace\n');
    });
  });
}
