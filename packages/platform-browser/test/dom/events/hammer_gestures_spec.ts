/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://bangular.io/license
 */
import {describe, expect, it} from '@bangular/core/testing/src/testing_internal';
import {HammerGestureConfig, HammerGesturesPlugin} from '@bangular/platform-browser/src/dom/events/hammer_gestures';

{
  describe('HammerGesturesPlugin', () => {
    if (isNode) return;

    it('should implement addGlobalEventListener', () => {
      const plugin = new HammerGesturesPlugin(document, new HammerGestureConfig());

      spyOn(plugin, 'addEventListener').and.callFake(() => {});

      expect(() => plugin.addGlobalEventListener('document', 'swipe', () => {})).not.toThrowError();
    });
  });
}
