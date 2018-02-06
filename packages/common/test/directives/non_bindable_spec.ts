/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://bangular.io/license
 */

import {Component, Directive} from '@bangular/core';
import {ElementRef} from '@bangular/core/src/linker/element_ref';
import {ComponentFixture, TestBed, async} from '@bangular/core/testing';
import {getDOM} from '@bangular/platform-browser/src/dom/dom_adapter';
import {expect} from '@bangular/platform-browser/testing/src/matchers';

{
  describe('non-bindable', () => {

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [TestComponent, TestDirective],
      });
    });

    it('should not interpolate children', async(() => {
         const template = '<div>{{text}}<span ngNonBindable>{{text}}</span></div>';
         const fixture = createTestComponent(template);

         fixture.detectChanges();
         expect(fixture.nativeElement).toHaveText('foo{{text}}');
       }));

    it('should ignore directives on child nodes', async(() => {
         const template = '<div ngNonBindable><span id=child test-dec>{{text}}</span></div>';
         const fixture = createTestComponent(template);
         fixture.detectChanges();

         // We must use getDOM().querySelector instead of fixture.query here
         // since the elements inside are not compiled.
         const span = getDOM().querySelector(fixture.nativeElement, '#child');
         expect(getDOM().hasClass(span, 'compiled')).toBeFalsy();
       }));

    it('should trigger directives on the same node', async(() => {
         const template = '<div><span id=child ngNonBindable test-dec>{{text}}</span></div>';
         const fixture = createTestComponent(template);
         fixture.detectChanges();
         const span = getDOM().querySelector(fixture.nativeElement, '#child');
         expect(getDOM().hasClass(span, 'compiled')).toBeTruthy();
       }));
  });
}

@Directive({selector: '[test-dec]'})
class TestDirective {
  constructor(el: ElementRef) { getDOM().addClass(el.nativeElement, 'compiled'); }
}

@Component({selector: 'test-cmp', template: ''})
class TestComponent {
  text: string;
  constructor() { this.text = 'foo'; }
}

function createTestComponent(template: string): ComponentFixture<TestComponent> {
  return TestBed.overrideComponent(TestComponent, {set: {template: template}})
      .createComponent(TestComponent);
}
