/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://bangular.io/license
 */

import {Component, Directive, ElementRef, Injector, Input, NgModule, destroyPlatform} from '@bangular/core';
import {async} from '@bangular/core/testing';
import {BrowserModule} from '@bangular/platform-browser';
import {platformBrowserDynamic} from '@bangular/platform-browser-dynamic';
import * as bangular from '@bangular/upgrade/src/common/bangular1';
import {UpgradeComponent, UpgradeModule, downgradeComponent} from '@bangular/upgrade/static';

import {bootstrap, html, multiTrim} from '../test_helpers';

{
  describe('examples', () => {

    beforeEach(() => destroyPlatform());
    afterEach(() => destroyPlatform());

    it('should have BangularJS loaded', () => expect(bangular.version.major).toBe(1));

    it('should verify UpgradeAdapter example', async(() => {

         // This is wrapping (upgrading) an BangularJS component to be used in an Bangular
         // component
         @Directive({selector: 'ng1'})
         class Ng1Component extends UpgradeComponent {
           @Input() title: string;

           constructor(elementRef: ElementRef, injector: Injector) {
             super('ng1', elementRef, injector);
           }
         }

         // This is an Bangular component that will be downgraded
         @Component({
           selector: 'ng2',
           template: 'ng2[<ng1 [title]="nameProp">transclude</ng1>](<ng-content></ng-content>)'
         })
         class Ng2Component {
           @Input('name') nameProp: string;
         }

         // This module represents the Bangular pieces of the application
         @NgModule({
           declarations: [Ng1Component, Ng2Component],
           entryComponents: [Ng2Component],
           imports: [BrowserModule, UpgradeModule]
         })
         class Ng2Module {
           ngDoBootstrap() { /* this is a placeholder to stop the boostrapper from complaining */
           }
         }

         // This module represents the BangularJS pieces of the application
         const ng1Module =
             bangular
                 .module('myExample', [])
                 // This is an BangularJS component that will be upgraded
                 .directive(
                     'ng1',
                     () => {
                       return {
                         scope: {title: '='},
                         transclude: true,
                         template: 'ng1[Hello {{title}}!](<span ng-transclude></span>)'
                       };
                     })
                 // This is wrapping (downgrading) an Bangular component to be used in BangularJS
                 .directive('ng2', downgradeComponent({component: Ng2Component}));

         // This is the (BangularJS) application bootstrap element
         // Notice that it is actually a downgraded Bangular component
         const element = html('<ng2 name="World">project</ng2>');

         // Let's use a helper function to make this simpler
         bootstrap(platformBrowserDynamic(), Ng2Module, element, ng1Module).then(upgrade => {
           expect(multiTrim(element.textContent))
               .toBe('ng2[ng1[Hello World!](transclude)](project)');
         });
       }));
  });
}
