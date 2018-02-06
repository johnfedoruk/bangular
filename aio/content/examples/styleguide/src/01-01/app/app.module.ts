// #docplaster
// #docregion
import { NgModule } from '@bangular/core';
import { BrowserModule } from '@bangular/platform-browser';
import { RouterModule } from '@bangular/router';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';

@NgModule({
  imports: [
    BrowserModule,
    // #enddocregion
    RouterModule.forChild([{ path: '01-01', component: AppComponent }])
    // #docregion
  ],
  declarations: [
    AppComponent,
    HeroesComponent
  ],
  exports: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
// #enddocregion


