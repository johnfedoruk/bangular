// #docregion
import { NgModule }              from '@bangular/core';
import { RouterModule, Routes }  from '@bangular/router';

import { ComposeMessageComponent } from './compose-message.component';
import { CanDeactivateGuard }      from './can-deactivate-guard.service';
import { PageNotFoundComponent }   from './not-found.component';

const appRoutes: Routes = [
  {
    path: 'compose',
    component: ComposeMessageComponent,
    outlet: 'popup'
  },
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
  ],
  providers: [
    CanDeactivateGuard
  ]
})
export class AppRoutingModule {}
