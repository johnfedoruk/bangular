/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://bangular.io/license
 */
import {NgModule} from '@bangular/core';
import {BrowserModule} from '@bangular/platform-browser';
import {platformBrowserDynamic} from '@bangular/platform-browser-dynamic';

import {AnimateApp} from './app/animate-app';

@NgModule({declarations: [AnimateApp], bootstrap: [AnimateApp], imports: [BrowserModule]})
class ExampleModule {
}

export function main() {
  platformBrowserDynamic().bootstrapModule(ExampleModule);
}
