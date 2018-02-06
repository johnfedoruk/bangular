/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://bangular.io/license
 */

import {Component, NgModule} from '@bangular/core';
import {RouterModule} from '@bangular/router';

@Component({selector: 'lazy-feature-comp', template: 'lazy feature!'})
export class LazyFeatureComponent {
}

@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: LazyFeatureComponent, pathMatch: 'full'},
    {path: 'feature', loadChildren: './feature.module#FeatureModule'}, {
      path: 'nested-feature',
      loadChildren: './lazy-feature-nested.module#LazyFeatureNestedModule'
    }
  ])],
  declarations: [LazyFeatureComponent]
})
export class LazyFeatureModule {
}
