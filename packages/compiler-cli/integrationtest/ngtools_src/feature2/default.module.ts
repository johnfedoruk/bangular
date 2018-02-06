/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://bangular.io/license
 */

import {Component, NgModule} from '@bangular/core';
import {RouterModule} from '@bangular/router';

@Component({selector: 'feature-component', template: 'foo.html'})
export class FeatureComponent {
}

@NgModule({
  declarations: [FeatureComponent],
  imports: [RouterModule.forChild([
    {path: '', component: FeatureComponent},
  ])]
})
export default class DefaultModule {
}
