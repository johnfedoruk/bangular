/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://bangular.io/license
 */


import {Component, NgModule} from '@bangular/core';
import {BrowserModule} from '@bangular/platform-browser';
import {platformBrowserDynamic} from '@bangular/platform-browser-dynamic';

@Component({selector: 'my-component'})
class MyAppComponent {
}

// #docregion providers
@NgModule({imports: [BrowserModule], bootstrap: [MyAppComponent]})
class AppModule {
}
platformBrowserDynamic().bootstrapModule(AppModule);
// #enddocregion
