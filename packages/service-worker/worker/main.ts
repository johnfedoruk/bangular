/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://bangular.io/license
 */

import {Adapter} from './src/adapter';
import {CacheDatabase} from './src/db-cache';
import {Driver} from './src/driver';

const scope = self as any as ServiceWorkerGlobalScope;

const adapter = new Adapter();
const driver = new Driver(scope, adapter, new CacheDatabase(scope, adapter));
