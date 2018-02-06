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

import {MyCmp} from './app/my_cmp';

export function main() {
  platformBrowserDynamic().bootstrapModule(ExampleModule);
}

@Component({
  selector: 'relative-app',
  template: `component = <my-cmp></my-cmp>`,
})
export class RelativeApp {
}

@NgModule({declarations: [RelativeApp, MyCmp], bootstrap: [RelativeApp], imports: [BrowserModule]})
class ExampleModule {
}
