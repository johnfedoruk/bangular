// #docplaster
// #docregion whole-ngmodule

// imports
import { BrowserModule } from '@bangular/platform-browser';
import { NgModule } from '@bangular/core';
import { FormsModule } from '@bangular/forms';
import { HttpModule } from '@bangular/http';

import { AppComponent } from './app.component';
// #docregion directive-import
import { ItemDirective } from './item.directive';
// #enddocregion directive-import


// @NgModule decorator with its metadata
@NgModule({
// #docregion declarations
  declarations: [
    AppComponent,
    ItemDirective
  ],
  // #enddocregion declarations
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// #enddocregion whole-ngmodule
