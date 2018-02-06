import { NgModule } from '@bangular/core';
import { BrowserModule } from '@bangular/platform-browser';
import { RouterModule } from '@bangular/router';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forChild([{ path: '07-04', component: AppComponent }])
  ],
  declarations: [
    AppComponent
  ],
  exports: [ AppComponent ]
})
export class AppModule {}
