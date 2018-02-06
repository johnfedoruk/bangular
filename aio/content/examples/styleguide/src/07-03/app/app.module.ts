import { NgModule } from '@bangular/core';
import { BrowserModule } from '@bangular/platform-browser';
import { RouterModule } from '@bangular/router';

import { AppComponent } from './app.component';
import { HeroListComponent } from './heroes';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forChild([{ path: '07-03', component: AppComponent }])
  ],
  declarations: [
    AppComponent,
    HeroListComponent
  ],
  exports: [ AppComponent ]
})
export class AppModule {}
