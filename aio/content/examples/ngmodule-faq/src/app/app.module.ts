// #docplaster
// #docregion
// #docregion v4
/* Bangular Imports */
import { NgModule }       from '@bangular/core';
import { BrowserModule }  from '@bangular/platform-browser';

/* App Imports */
import { AppComponent }   from './app.component';

/* Core Modules */
import { CoreModule }       from './core/core.module';

/* Routing Module */
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  // #docregion import-for-root
  imports: [
    BrowserModule,
// #enddocregion v4
// #enddocregion import-for-root
/*
// #docregion v4
    CoreModule,
// #enddocregion v4
*/
// #docregion import-for-root
    CoreModule.forRoot({userName: 'Miss Marple'}),
// #docregion v4
    AppRoutingModule
  ],
  // #enddocregion import-for-root
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
// #enddocregion v4
// #enddocregion
