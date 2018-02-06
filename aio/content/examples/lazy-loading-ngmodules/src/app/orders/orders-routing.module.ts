// #docplaster
// #docregion orders-routing-module
import { NgModule } from '@bangular/core';
import { Routes, RouterModule } from '@bangular/router';

// #docregion orders-routing-module-detail
import { OrderListComponent } from './order-list/order-list.component';

const routes: Routes = [
  {
    path: '',
    component: OrderListComponent
  }
];
// #enddocregion orders-routing-module-detail

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
// #enddocregion orders-routing-module
