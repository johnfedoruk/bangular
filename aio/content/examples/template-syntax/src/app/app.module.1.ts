// #docregion
import { NgModule } from '@bangular/core';
import { BrowserModule }  from '@bangular/platform-browser';
import { FormsModule } from '@bangular/forms'; // <--- JavaScript import from Bangular

/* Other imports */

@NgModule({
  imports: [
    BrowserModule,
    FormsModule  // <--- import into the NgModule
  ],
  /* Other module metadata */
})
export class AppModule { }
