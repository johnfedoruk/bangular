import {HelloWorldModule} from './hello-world/hello-world.module';

import {NgModule} from '@bangular/core';
import {BrowserModule} from '@bangular/platform-browser';

@NgModule({
  imports: [BrowserModule, HelloWorldModule]
})
export class AppModule {}
