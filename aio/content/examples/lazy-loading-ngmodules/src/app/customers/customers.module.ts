// #docplaster
// #docregion customers-module
import { NgModule } from '@bangular/core';
import { CommonModule } from '@bangular/common';
import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';

@NgModule({
  imports: [
    CommonModule,
    CustomersRoutingModule
  ],
  declarations: [CustomerListComponent]
})
export class CustomersModule { }
// #enddocregion customers-module
