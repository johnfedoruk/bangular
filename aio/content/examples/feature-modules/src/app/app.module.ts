// #docplaster
// #docregion app-module
import { BrowserModule } from '@bangular/platform-browser';
import { NgModule } from '@bangular/core';
import { FormsModule } from '@bangular/forms';
import { HttpModule } from '@bangular/http';

import { AppComponent } from './app.component';
// import the feature module here so you can add it to the imports array below
import { CustomerDashboardModule } from './customer-dashboard/customer-dashboard.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CustomerDashboardModule // add the feature module here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
// #enddocregion app-module
