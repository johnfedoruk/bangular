// #docplaster
// #docregion
import { NgModule } from '@bangular/core';
import { BrowserModule } from '@bangular/platform-browser';
import { RouterModule } from '@bangular/router';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    // #enddocregion
    RouterModule.forChild([{ path: '02-05', component: AppComponent }])
    // #docregion
  ],
  declarations: [
    AppComponent
  ],
  exports: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
// #enddocregion
