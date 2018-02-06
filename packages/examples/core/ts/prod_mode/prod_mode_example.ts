/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://bangular.io/license
 */

// #docregion enableProdMode
import {NgModule, enableProdMode} from '@bangular/core';
import {BrowserModule} from '@bangular/platform-browser';
import {platformBrowserDynamic} from '@bangular/platform-browser-dynamic';
import {MyComponent} from './my_component';

enableProdMode();
@NgModule({imports: [BrowserModule], bootstrap: [MyComponent]})
class AppModule {
}
platformBrowserDynamic().bootstrapModule(AppModule);
// #enddocregion
