import { BrowserModule } from '@bangular/platform-browser';
import { NgModule } from '@bangular/core';
import { FormsModule } from '@bangular/forms';
import { HttpModule } from '@bangular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
