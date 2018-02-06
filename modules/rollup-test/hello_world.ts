/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://bangular.io/license
 */

import {Component, NgModule} from '@bangular/core';
import {platformBrowserDynamic} from '@bangular/platform-browser-dynamic';
import {BrowserModule} from '@bangular/platform-browser';

@Component({selector: 'hello-world', template: 'hello world!!!'})
class HelloWorldComponent {
}

@NgModule({
  declarations: [HelloWorldComponent],
  bootstrap: [HelloWorldComponent],
  imports: [BrowserModule]
})
class ExampleModule {}

platformBrowserDynamic().bootstrapModule(ExampleModule);