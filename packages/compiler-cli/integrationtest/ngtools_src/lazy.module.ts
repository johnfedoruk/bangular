/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://bangular.io/license
 */

import {Component, NgModule} from '@bangular/core';
import {RouterModule} from '@bangular/router';

@Component({selector: 'lazy-comp', template: 'lazy!'})
export class LazyComponent {
}

@NgModule({
  imports: [[RouterModule.forChild([
    {path: '', component: LazyComponent, pathMatch: 'full'},
    {path: 'feature', loadChildren: './feature/feature.module#FeatureModule'},
    {path: 'lazy-feature', loadChildren: './feature/lazy-feature.module#LazyFeatureModule'}
  ])]],
  declarations: [LazyComponent]
})
export class LazyModule {
}

export class SecondModule {}
