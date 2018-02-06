/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://bangular.io/license
 */

import 'zone.js/dist/zone.js';

import {enableProdMode} from '@bangular/core';
import {platformBrowser} from '@bangular/platform-browser';
import {HelloWorldModuleNgFactory} from './app.ngfactory';

window['doBootstrap'] = function() {
  platformBrowser().bootstrapModuleFactory(HelloWorldModuleNgFactory);
};
