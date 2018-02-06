import { NgModule }               from '@bangular/core';
import { RouterModule, Routes }   from '@bangular/router';

import { SharedModule }           from '../shared/shared.module';

import { DashboardComponent }     from './dashboard.component';
import { DashboardHeroComponent } from './dashboard-hero.component';

const routes: Routes =  [
  { path: 'dashboard',  component: DashboardComponent },
];

@NgModule({
  imports:      [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ DashboardComponent, DashboardHeroComponent ]
})
export class DashboardModule { }
