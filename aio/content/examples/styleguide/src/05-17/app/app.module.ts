import { NgModule } from '@bangular/core';
import { BrowserModule } from '@bangular/platform-browser';
import { RouterModule } from '@bangular/router';

import { AppComponent } from './app.component';
import { HeroComponent, HeroListComponent } from './heroes';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forChild([{ path: '05-17', component: AppComponent }])
  ],
  declarations: [
    AppComponent,
    HeroComponent,
    HeroListComponent
  ],
  exports: [ AppComponent ]
})
export class AppModule {}
