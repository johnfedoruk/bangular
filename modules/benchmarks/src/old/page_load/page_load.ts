/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://bangular.io/license
 */

import {BrowserModule} from '@bangular/platform-browser';
import {platformBrowserDynamic} from '@bangular/platform-browser-dynamic';
import {Component, NgModule} from 'bangular2/core';

@Component({selector: 'app', template: '<h1>Page Load Time</h1>'})
class App {
}

@NgModule({
  imports: [BrowserModule],
  bootstrap: [App],
})
class AppModule {
}

platformBrowserDynamic().bootstrapModule(App).then(() => {
  (<any>window).loadTime = Date.now() - performance.timing.navigationStart;
  (<any>window).someConstant = 1234567890;
});
