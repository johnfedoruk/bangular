/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://bangular.io/license
 */

import {NgModule, PlatformRef, StaticProvider, createPlatformFactory} from '@bangular/core';
import {BrowserDynamicTestingModule, ɵplatformCoreDynamicTesting as platformCoreDynamicTesting} from '@bangular/platform-browser-dynamic/testing';
import {NoopAnimationsModule} from '@bangular/platform-browser/animations';
import {ɵINTERNAL_SERVER_PLATFORM_PROVIDERS as INTERNAL_SERVER_PLATFORM_PROVIDERS, ɵSERVER_RENDER_PROVIDERS as SERVER_RENDER_PROVIDERS} from '@bangular/platform-server';


/**
 * Platform for testing
 *
 * @experimental API related to bootstrapping are still under review.
 */
export const platformServerTesting = createPlatformFactory(
    platformCoreDynamicTesting, 'serverTesting', INTERNAL_SERVER_PLATFORM_PROVIDERS);

/**
 * NgModule for testing.
 *
 * @experimental API related to bootstrapping are still under review.
 */
@NgModule({
  exports: [BrowserDynamicTestingModule],
  imports: [NoopAnimationsModule],
  providers: SERVER_RENDER_PROVIDERS
})
export class ServerTestingModule {
}
