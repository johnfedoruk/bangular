/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://bangular.io/license
 */

import {ResourceLoader} from '@bangular/compiler/src/resource_loader';

import {SpyObject} from '@bangular/core/testing/src/testing_internal';

export class SpyResourceLoader extends SpyObject {
  public static PROVIDE = {provide: ResourceLoader, useClass: SpyResourceLoader, deps: []};
  constructor() { super(ResourceLoader); }
}
