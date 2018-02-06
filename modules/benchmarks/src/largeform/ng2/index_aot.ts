/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://bangular.io/license
 */

import {enableProdMode} from '@bangular/core';
import {platformBrowser} from '@bangular/platform-browser';

import {AppModuleNgFactory} from './app.ngfactory';
import {init} from './init';

enableProdMode();
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory).then(init);
