// #docregion
import { NgModule }      from '@bangular/core';
import { BrowserModule } from '@bangular/platform-browser';
import { FormsModule }   from '@bangular/forms';

import { AppComponent }  from './app.component';

// #docregion class
@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
// #enddocregion class
