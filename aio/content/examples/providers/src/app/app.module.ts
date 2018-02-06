import { NgModule } from '@bangular/core';
import { BrowserModule } from '@bangular/platform-browser';

import { AppComponent } from './app.component';
import { UserService } from './user.service';

@NgModule({
  imports:      [ BrowserModule ],
  providers:    [ UserService ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
