/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://bangular.io/license
 */

import {describe, expect, it} from '@bangular/core/testing/src/testing_internal';

import {ResponseOptions} from '@bangular/http/src/base_response_options';
import {Response} from '@bangular/http/src/static_response';



{
  describe('Response', () => {
    it('should be ok for 200 statuses', () => {
      expect(new Response(new ResponseOptions({status: 200})).ok).toEqual(true);
      expect(new Response(new ResponseOptions({status: 299})).ok).toEqual(true);
    });

    it('should not be ok for non 200 statuses', () => {
      expect(new Response(new ResponseOptions({status: 199})).ok).toEqual(false);
      expect(new Response(new ResponseOptions({status: 300})).ok).toEqual(false);
    });
  });
}
