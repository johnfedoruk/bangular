import { NgModule } from '@bangular/core';
import { CommonModule } from '@bangular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrderListComponent } from './order-list/order-list.component';

@NgModule({
  imports: [
    CommonModule,
    OrdersRoutingModule
  ],
  declarations: [OrderListComponent]
})
export class OrdersModule { }
