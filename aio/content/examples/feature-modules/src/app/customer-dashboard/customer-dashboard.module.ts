// #docplaster
// #docregion customer-dashboard
import { NgModule } from '@bangular/core';
import { CommonModule } from '@bangular/common';
// #enddocregion customer-dashboard
// #docregion customer-dashboard-component
// import the new component
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
// #enddocregion customer-dashboard-component


// #docregion customer-dashboard-component
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CustomerDashboardComponent
  ],
  // #enddocregion customer-dashboard-component
  // #docregion component-exports
  exports: [
    CustomerDashboardComponent
  ]
  // #enddocregion component-exports
  // #docregion customer-dashboard-component
})

// #enddocregion customer-dashboard-component

// #docregion customer-dashboard
export class CustomerDashboardModule { }

// #enddocregion customer-dashboard
