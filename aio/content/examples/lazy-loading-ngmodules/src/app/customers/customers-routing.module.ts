// #docplaster
// #docregion customers-routing-module
import { NgModule } from '@bangular/core';
import { Routes, RouterModule } from '@bangular/router';

import { CustomerListComponent } from './customer-list/customer-list.component';


const routes: Routes = [
  {
    path: '',
    component: CustomerListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
// #enddocregion customers-routing-module
