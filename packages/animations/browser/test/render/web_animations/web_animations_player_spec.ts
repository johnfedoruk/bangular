/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://bangular.io/license
 */
import {DOMAnimation} from '../../../src/render/web_animations/dom_animation';
import {WebAnimationsPlayer} from '../../../src/render/web_animations/web_animations_player';

{
  let element: any;
  let innerPlayer: MockDomAnimation|null = null;
  beforeEach(() => {
    element = {};
    element['animate'] = () => { return innerPlayer = new MockDomAnimation(); };
  });

  describe('WebAnimationsPlayer tests', () => {
    it('should automatically pause the player when created and initialized', () => {
      const keyframes = [
        {opacity: 0, offset: 0},
        {opacity: 1, offset: 1},
      ];

      const player = new WebAnimationsPlayer(element, keyframes, {duration: 1000});

      player.init();
      const p = innerPlayer !;
      expect(p.log).toEqual(['pause']);

      player.play();
      expect(p.log).toEqual(['pause', 'play']);
    });

    it('should allow an empty set of keyframes with a set of previous styles', () => {
      const previousKeyframes = [
        {opacity: 0, offset: 0},
        {opacity: 1, offset: 1},
      ];

      const previousPlayer = new WebAnimationsPlayer(element, previousKeyframes, {duration: 1000});
      previousPlayer.play();
      previousPlayer.finish();
      previousPlayer.beforeDestroy();

      const EMPTY_KEYFRAMES: any[] = [];
      const player =
          new WebAnimationsPlayer(element, EMPTY_KEYFRAMES, {duration: 1000}, [previousPlayer]);
      player.play();
      player.destroy();
    });

    it('should not pause the player if created and started before initialized', () => {
      const keyframes = [
        {opacity: 0, offset: 0},
        {opacity: 1, offset: 1},
      ];

      const player = new WebAnimationsPlayer(element, keyframes, {duration: 1000});

      player.play();
      const p = innerPlayer !;
      expect(p.log).toEqual(['play']);
    });

    it('should fire start/done callbacks manually when called directly', () => {
      const log: string[] = [];

      const player = new WebAnimationsPlayer(element, [], {duration: 1000});
      player.onStart(() => log.push('started'));
      player.onDone(() => log.push('done'));

      (player as any).triggerCallback('start');
      expect(log).toEqual(['started']);

      player.play();
      expect(log).toEqual(['started']);

      (player as any).triggerCallback('done');
      expect(log).toEqual(['started', 'done']);

      player.finish();
      expect(log).toEqual(['started', 'done']);
    });
  });
}

class MockDomAnimation implements DOMAnimation {
  log: string[] = [];
  cancel(): void { this.log.push('cancel'); }
  play(): void { this.log.push('play'); }
  pause(): void { this.log.push('pause'); }
  finish(): void { this.log.push('finish'); }
  onfinish: Function = () => {};
  position: number = 0;
  currentTime: number = 0;
  addEventListener(eventName: string, handler: (event: any) => any): any {}
  dispatchEvent(eventName: string): any {}
}
