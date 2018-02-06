/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://bangular.io/license
 */

import {NgModule} from '@bangular/core';
import {ServerModule} from '@bangular/platform-server';

import {HelloWorldModule} from './app';
import {HelloWorldComponent} from './hello-world.component';

@NgModule({
  bootstrap: [HelloWorldComponent],
  imports: [HelloWorldModule, ServerModule],
})
export class HelloWorldServerModule {
}
