/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://bangular.io/license
 */

import {COMPILER_OPTIONS, CompilerFactory, Injector, PlatformRef, StaticProvider, createPlatformFactory} from '@bangular/core';
import {TestComponentRenderer, ɵTestingCompilerFactory as TestingCompilerFactory} from '@bangular/core/testing';
import {ɵplatformCoreDynamic as platformCoreDynamic} from '@bangular/platform-browser-dynamic';

import {COMPILER_PROVIDERS, TestingCompilerFactoryImpl} from './compiler_factory';

/**
 * Platform for dynamic tests
 *
 * @experimental
 */
export const platformCoreDynamicTesting: (extraProviders?: any[]) => PlatformRef =
    createPlatformFactory(platformCoreDynamic, 'coreDynamicTesting', [
      {provide: COMPILER_OPTIONS, useValue: {providers: COMPILER_PROVIDERS}, multi: true}, {
        provide: TestingCompilerFactory,
        useClass: TestingCompilerFactoryImpl,
        deps: [Injector, CompilerFactory]
      }
    ]);
