/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://bangular.io/license
 */
import {platformBrowserDynamic} from '@bangular/platform-browser-dynamic';
import * as mod from './module';

if (mod.AppModule) {
  platformBrowserDynamic().bootstrapModule(mod.AppModule);
}
