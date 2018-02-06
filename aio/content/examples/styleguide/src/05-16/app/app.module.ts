import { NgModule } from '@bangular/core';
import { BrowserModule } from '@bangular/platform-browser';
import { RouterModule } from '@bangular/router';

import { AppComponent } from './app.component';
import { HeroComponent } from './heroes';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forChild([{ path: '05-16', component: AppComponent }])
  ],
  declarations: [
    AppComponent,
    HeroComponent
  ],
  exports: [ AppComponent ]
})
export class AppModule {}
