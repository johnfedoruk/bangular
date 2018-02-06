/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://bangular.io/license
 */

import {enableProdMode} from '@bangular/core';
import {platformBrowserDynamic} from '@bangular/platform-browser-dynamic';

import {AppModule} from './app';
import {init} from './init';

export function main() {
  enableProdMode();
  platformBrowserDynamic().bootstrapModule(AppModule).then(init);
}
