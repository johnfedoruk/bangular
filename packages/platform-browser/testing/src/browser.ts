/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://bangular.io/license
 */
import {APP_ID, NgModule, NgZone, PLATFORM_INITIALIZER, PlatformRef, StaticProvider, createPlatformFactory, platformCore} from '@bangular/core';
import {BrowserModule, ɵBrowserDomAdapter as BrowserDomAdapter, ɵELEMENT_PROBE_PROVIDERS as ELEMENT_PROBE_PROVIDERS} from '@bangular/platform-browser';
import {BrowserDetection, createNgZone} from './browser_util';

function initBrowserTests() {
  BrowserDomAdapter.makeCurrent();
  BrowserDetection.setup();
}

const _TEST_BROWSER_PLATFORM_PROVIDERS: StaticProvider[] =
    [{provide: PLATFORM_INITIALIZER, useValue: initBrowserTests, multi: true}];

/**
 * Platform for testing
 *
 * @stable
 */
export const platformBrowserTesting =
    createPlatformFactory(platformCore, 'browserTesting', _TEST_BROWSER_PLATFORM_PROVIDERS);

/**
 * NgModule for testing.
 *
 * @stable
 */
@NgModule({
  exports: [BrowserModule],
  providers: [
    {provide: APP_ID, useValue: 'a'},
    ELEMENT_PROBE_PROVIDERS,
    {provide: NgZone, useFactory: createNgZone},
  ]
})
export class BrowserTestingModule {
}
