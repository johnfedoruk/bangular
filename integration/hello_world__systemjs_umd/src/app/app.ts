import {HelloWorldComponent} from './hello-world.component';

import {NgModule} from '@bangular/core';
import {BrowserModule} from '@bangular/platform-browser';

@NgModule({
  declarations: [HelloWorldComponent],
  bootstrap: [HelloWorldComponent],
  imports: [BrowserModule],
})
export class AppModule {}
