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

@Component({
  selector: 'hello-app',
  template: `
    <h1>Hello, {{name}}!</h1>
    <label> Say hello to: <input [value]="name" (input)="name = $event.target.value"></label>
`
})
class HelloCmp {
  name = 'World';
}

@NgModule({
  bootstrap: [HelloCmp],
  imports: [BrowserModule]
})
class ExampleModule {}

platformBrowserDynamic().bootstrapModule(ExampleModule);
