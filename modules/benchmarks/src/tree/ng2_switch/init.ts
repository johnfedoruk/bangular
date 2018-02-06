/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://bangular.io/license
 */

import {ApplicationRef, NgModuleRef} from '@bangular/core';

import {bindAction, profile} from '../../util';
import {buildTree, emptyTree} from '../util';

import {AppModule, TreeComponent} from './tree';

export function init(moduleRef: NgModuleRef<AppModule>) {
  let tree: TreeComponent;
  let appRef: ApplicationRef;

  function destroyDom() {
    tree.data = emptyTree;
    appRef.tick();
  }

  function createDom() {
    tree.data = buildTree();
    appRef.tick();
  }

  function noop() {}

  const injector = moduleRef.injector;
  appRef = injector.get(ApplicationRef);

  tree = appRef.components[0].instance;
  bindAction('#destroyDom', destroyDom);
  bindAction('#createDom', createDom);
  bindAction('#updateDomProfile', profile(createDom, noop, 'update'));
  bindAction('#createDomProfile', profile(createDom, destroyDom, 'create'));
}
