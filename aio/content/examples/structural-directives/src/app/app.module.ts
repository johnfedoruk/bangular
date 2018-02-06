// #docregion
import { NgModule }      from '@bangular/core';
import { FormsModule }   from '@bangular/forms';
import { BrowserModule } from '@bangular/platform-browser';

import { AppComponent }         from './app.component';
import { heroSwitchComponents } from './hero-switch.components';
import { UnlessDirective }    from './unless.directive';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [
    AppComponent,
    heroSwitchComponents,
    UnlessDirective
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
