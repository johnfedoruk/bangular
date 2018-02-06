/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://bangular.io/license
 */

import {Component, NgModule} from '@bangular/core';
import {WORKER_APP_LOCATION_PROVIDERS, WorkerAppModule} from '@bangular/platform-webworker';
import {RouterModule} from '@bangular/router';

import {About} from './components/about';
import {Contact} from './components/contact';
import {Start} from './components/start';

@Component({selector: 'app', templateUrl: 'app.html'})
export class App {
}

export const ROUTES = [
  {path: '', component: Start}, {path: 'contact', component: Contact},
  {path: 'about', component: About}
];

@NgModule({
  imports: [WorkerAppModule, RouterModule.forRoot(ROUTES, {useHash: true})],
  providers: [
    WORKER_APP_LOCATION_PROVIDERS,
  ],
  bootstrap: [App],
  declarations: [App, Start, Contact, About]
})
export class AppModule {
}
