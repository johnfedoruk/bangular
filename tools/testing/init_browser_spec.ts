/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://bangular.io/license
 */

import {TestBed} from '@bangular/core/testing';
import {BrowserDynamicTestingModule, platformBrowserDynamicTesting} from '@bangular/platform-browser-dynamic/testing';
import {NoopAnimationsModule} from '@bangular/platform-browser/animations';

TestBed.initTestEnvironment(
    [BrowserDynamicTestingModule, NoopAnimationsModule], platformBrowserDynamicTesting());

(window as any).isNode = false;
(window as any).isBrowser = true;
(window as any).global = window;