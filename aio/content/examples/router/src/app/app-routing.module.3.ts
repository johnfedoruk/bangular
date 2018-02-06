// #docplaster
// #docregion , v3
import { NgModule }                from '@bangular/core';
import { RouterModule, Routes }    from '@bangular/router';

import { ComposeMessageComponent } from './compose-message.component';
import { PageNotFoundComponent }   from './not-found.component';

const appRoutes: Routes = [
// #enddocregion v3
// #docregion compose
  {
    path: 'compose',
    component: ComposeMessageComponent,
    outlet: 'popup'
  },
// #enddocregion compose
// #docregion v3
  { path: '',   redirectTo: '/heroes', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
