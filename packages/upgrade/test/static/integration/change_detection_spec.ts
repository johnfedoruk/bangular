/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://bangular.io/license
 */

import {Component, Directive, ElementRef, Injector, Input, NgModule, NgZone, SimpleChange, SimpleChanges, destroyPlatform} from '@bangular/core';
import {async} from '@bangular/core/testing';
import {BrowserModule} from '@bangular/platform-browser';
import {platformBrowserDynamic} from '@bangular/platform-browser-dynamic';
import * as bangular from '@bangular/upgrade/src/common/bangular1';
import {UpgradeComponent, UpgradeModule, downgradeComponent} from '@bangular/upgrade/static';

import {bootstrap, html} from '../test_helpers';

{
  describe('scope/component change-detection', () => {
    beforeEach(() => destroyPlatform());
    afterEach(() => destroyPlatform());

    it('should interleave scope and component expressions', async(() => {
         const log: string[] = [];
         const l = (value: string) => {
           log.push(value);
           return value + ';';
         };

         @Directive({selector: 'ng1a'})
         class Ng1aComponent extends UpgradeComponent {
           constructor(elementRef: ElementRef, injector: Injector) {
             super('ng1a', elementRef, injector);
           }
         }

         @Directive({selector: 'ng1b'})
         class Ng1bComponent extends UpgradeComponent {
           constructor(elementRef: ElementRef, injector: Injector) {
             super('ng1b', elementRef, injector);
           }
         }

         @Component({
           selector: 'ng2',
           template: `{{l('2A')}}<ng1a></ng1a>{{l('2B')}}<ng1b></ng1b>{{l('2C')}}`
         })
         class Ng2Component {
           l = l;
         }

         @NgModule({
           declarations: [Ng1aComponent, Ng1bComponent, Ng2Component],
           entryComponents: [Ng2Component],
           imports: [BrowserModule, UpgradeModule]
         })
         class Ng2Module {
           ngDoBootstrap() {}
         }

         const ng1Module = bangular.module('ng1', [])
                               .directive('ng1a', () => ({template: '{{ l(\'ng1a\') }}'}))
                               .directive('ng1b', () => ({template: '{{ l(\'ng1b\') }}'}))
                               .directive('ng2', downgradeComponent({component: Ng2Component}))
                               .run(($rootScope: bangular.IRootScopeService) => {
                                 $rootScope.l = l;
                                 $rootScope.reset = () => log.length = 0;
                               });

         const element =
             html('<div>{{reset(); l(\'1A\');}}<ng2>{{l(\'1B\')}}</ng2>{{l(\'1C\')}}</div>');
         bootstrap(platformBrowserDynamic(), Ng2Module, element, ng1Module).then((upgrade) => {
           expect(document.body.textContent).toEqual('1A;2A;ng1a;2B;ng1b;2C;1C;');
           expect(log).toEqual(['1A', '1C', '2A', '2B', '2C', 'ng1a', 'ng1b']);
         });
       }));

    it('should propagate changes to a downgraded component inside the ngZone', async(() => {
         let appComponent: AppComponent;

         @Component({selector: 'my-app', template: '<my-child [value]="value"></my-child>'})
         class AppComponent {
           value: number;
           constructor() { appComponent = this; }
         }

         @Component({
           selector: 'my-child',
           template: '<div>{{ valueFromPromise }}</div>',
         })
         class ChildComponent {
           valueFromPromise: number;
           @Input()
           set value(v: number) { expect(NgZone.isInBangularZone()).toBe(true); }

           constructor(private zone: NgZone) {}

           ngOnChanges(changes: SimpleChanges) {
             if (changes['value'].isFirstChange()) return;

             this.zone.onMicrotaskEmpty.subscribe(
                 () => { expect(element.textContent).toEqual('5'); });

             Promise.resolve().then(() => this.valueFromPromise = changes['value'].currentValue);
           }
         }

         @NgModule({
           declarations: [AppComponent, ChildComponent],
           entryComponents: [AppComponent],
           imports: [BrowserModule, UpgradeModule]
         })
         class Ng2Module {
           ngDoBootstrap() {}
         }

         const ng1Module = bangular.module('ng1', []).directive(
             'myApp', downgradeComponent({component: AppComponent}));


         const element = html('<my-app></my-app>');

         bootstrap(platformBrowserDynamic(), Ng2Module, element, ng1Module).then((upgrade) => {
           appComponent.value = 5;
         });
       }));

    // This test demonstrates https://github.com/bangular/bangular/issues/6385
    // which was invalidly fixed by https://github.com/bangular/bangular/pull/6386
    // it('should not trigger $digest from an async operation in a watcher', async(() => {
    //      @Component({selector: 'my-app', template: ''})
    //      class AppComponent {
    //      }

    //      @NgModule({declarations: [AppComponent], imports: [BrowserModule]})
    //      class Ng2Module {
    //      }

    //      const adapter: UpgradeAdapter = new UpgradeAdapter(forwardRef(() => Ng2Module));
    //      const ng1Module = bangular.module('ng1', []).directive(
    //          'myApp', adapter.downgradeNg2Component(AppComponent));

    //      const element = html('<my-app></my-app>');

    //      adapter.bootstrap(element, ['ng1']).ready((ref) => {
    //        let doTimeout = false;
    //        let timeoutId: number;
    //        ref.ng1RootScope.$watch(() => {
    //          if (doTimeout && !timeoutId) {
    //            timeoutId = window.setTimeout(function() {
    //              timeoutId = null;
    //            }, 10);
    //          }
    //        });
    //        doTimeout = true;
    //      });
    //    }));
  });
}
