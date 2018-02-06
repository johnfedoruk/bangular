// #docplaster
// #docregion
// #docregion example
import { NgModule }      from '@bangular/core';
import { BrowserModule } from '@bangular/platform-browser';
// #enddocregion example
import { RouterModule }  from '@bangular/router';
// #docregion example

import { AppComponent }    from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { SharedModule }    from './shared/shared.module';

@NgModule({
  imports: [
    BrowserModule,
    SharedModule,
// #enddocregion example
    RouterModule.forChild([{ path: '04-10', component: AppComponent }])
// #docregion example
  ],
  declarations: [
    AppComponent,
    HeroesComponent
  ],
  exports: [ AppComponent ],
  entryComponents: [ AppComponent ]
})
export class AppModule {}
// #enddocregion example
