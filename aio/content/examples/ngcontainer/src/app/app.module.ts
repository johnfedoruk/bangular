// #docregion
import { NgModule }      from '@bangular/core';
import { FormsModule }   from '@bangular/forms';
import { BrowserModule } from '@bangular/platform-browser';

import { AppComponent }     from './app.component';
import { ContentComponent } from './content.component';
import { heroComponents } from './hero.components';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [
    AppComponent,
    ContentComponent,
    heroComponents
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
