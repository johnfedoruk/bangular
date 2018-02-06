import { NgModule }      from '@bangular/core';
import { BrowserModule } from '@bangular/platform-browser';

import { AppComponent }  from './app.component.0';

@NgModule({
// #docregion imports
  imports: [ BrowserModule ],
// #enddocregion imports
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
