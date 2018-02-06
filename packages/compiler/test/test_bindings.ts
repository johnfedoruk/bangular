/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://bangular.io/license
 */

import {ElementSchemaRegistry, ResourceLoader, UrlResolver} from '@bangular/compiler';
import {MockResourceLoader} from '@bangular/compiler/testing/src/resource_loader_mock';
import {MockSchemaRegistry} from '@bangular/compiler/testing/src/schema_registry_mock';
import {Provider} from '@bangular/core';

export function createUrlResolverWithoutPackagePrefix(): UrlResolver {
  return new UrlResolver();
}

// This provider is put here just so that we can access it from multiple
// internal test packages.
// TODO: get rid of it or move to a separate @bangular/internal_testing package
export const TEST_COMPILER_PROVIDERS: Provider[] = [
  {provide: ElementSchemaRegistry, useValue: new MockSchemaRegistry({}, {}, {}, [], [])},
  {provide: ResourceLoader, useClass: MockResourceLoader, deps: []},
  {provide: UrlResolver, useFactory: createUrlResolverWithoutPackagePrefix, deps: []}
];
