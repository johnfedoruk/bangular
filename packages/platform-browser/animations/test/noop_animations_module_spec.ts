/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://bangular.io/license
 */
import {animate, style, transition, trigger} from '@bangular/animations';
import {ɵAnimationEngine} from '@bangular/animations/browser';
import {Component} from '@bangular/core';
import {TestBed} from '@bangular/core/testing';

import {NoopAnimationsModule} from '../src/module';

{
  describe('NoopAnimationsModule', () => {
    beforeEach(() => { TestBed.configureTestingModule({imports: [NoopAnimationsModule]}); });

    it('should flush and fire callbacks when the zone becomes stable', (async) => {
      @Component({
        selector: 'my-cmp',
        template:
            '<div [@myAnimation]="exp" (@myAnimation.start)="onStart($event)" (@myAnimation.done)="onDone($event)"></div>',
        animations: [trigger(
            'myAnimation',
            [transition(
                '* => state', [style({'opacity': '0'}), animate(500, style({'opacity': '1'}))])])],
      })
      class Cmp {
        exp: any;
        startEvent: any;
        doneEvent: any;
        onStart(event: any) { this.startEvent = event; }
        onDone(event: any) { this.doneEvent = event; }
      }

      TestBed.configureTestingModule({declarations: [Cmp]});

      const fixture = TestBed.createComponent(Cmp);
      const cmp = fixture.componentInstance;
      cmp.exp = 'state';
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(cmp.startEvent.triggerName).toEqual('myAnimation');
        expect(cmp.startEvent.phaseName).toEqual('start');
        expect(cmp.doneEvent.triggerName).toEqual('myAnimation');
        expect(cmp.doneEvent.phaseName).toEqual('done');
        async();
      });
    });

    it('should handle leave animation callbacks even if the element is destroyed in the process',
       (async) => {
         @Component({
           selector: 'my-cmp',
           template:
               '<div *ngIf="exp" @myAnimation (@myAnimation.start)="onStart($event)" (@myAnimation.done)="onDone($event)"></div>',
           animations: [trigger(
               'myAnimation',
               [transition(
                   ':leave', [style({'opacity': '0'}), animate(500, style({'opacity': '1'}))])])],
         })
         class Cmp {
           exp: any;
           startEvent: any;
           doneEvent: any;
           onStart(event: any) { this.startEvent = event; }
           onDone(event: any) { this.doneEvent = event; }
         }

         TestBed.configureTestingModule({declarations: [Cmp]});
         const engine = TestBed.get(ɵAnimationEngine);
         const fixture = TestBed.createComponent(Cmp);
         const cmp = fixture.componentInstance;

         cmp.exp = true;
         fixture.detectChanges();
         fixture.whenStable().then(() => {
           cmp.startEvent = null;
           cmp.doneEvent = null;

           cmp.exp = false;
           fixture.detectChanges();
           fixture.whenStable().then(() => {
             expect(cmp.startEvent.triggerName).toEqual('myAnimation');
             expect(cmp.startEvent.phaseName).toEqual('start');
             expect(cmp.startEvent.toState).toEqual('void');
             expect(cmp.doneEvent.triggerName).toEqual('myAnimation');
             expect(cmp.doneEvent.phaseName).toEqual('done');
             expect(cmp.doneEvent.toState).toEqual('void');
             async();
           });
         });
       });
  });
}
