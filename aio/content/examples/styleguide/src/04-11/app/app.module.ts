// #docplaster
// #docregion
// #docregion example
import { NgModule }      from '@bangular/core';
import { BrowserModule } from '@bangular/platform-browser';
// #enddocregion example
import { RouterModule } from '@bangular/router';
// #docregion example

import { AppComponent }   from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { CoreModule }    from './core/core.module';

@NgModule({
  imports: [
    BrowserModule,
    CoreModule,
// #enddocregion example
    RouterModule.forChild([{ path: '04-11', component: AppComponent }])
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
