/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://bangular.io/license
 */

import {NgModule, PlatformRef, StaticProvider, createPlatformFactory} from '@bangular/core';
import {TestComponentRenderer} from '@bangular/core/testing';
import {ɵINTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS as INTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS} from '@bangular/platform-browser-dynamic';
import {BrowserTestingModule} from '@bangular/platform-browser/testing';

import {DOMTestComponentRenderer} from './dom_test_component_renderer';
import {platformCoreDynamicTesting} from './platform_core_dynamic_testing';

export * from './private_export_testing';

/**
 * @stable
 */
export const platformBrowserDynamicTesting = createPlatformFactory(
    platformCoreDynamicTesting, 'browserDynamicTesting',
    INTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS);

/**
 * NgModule for testing.
 *
 * @stable
 */
@NgModule({
  exports: [BrowserTestingModule],
  providers: [
    {provide: TestComponentRenderer, useClass: DOMTestComponentRenderer},
  ]
})
export class BrowserDynamicTestingModule {
}
