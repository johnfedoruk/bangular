import { BrowserModule } from '@bangular/platform-browser';
import { NgModule } from '@bangular/core';
import { FormsModule } from '@bangular/forms';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroService } from './hero.service';
import { MessageService } from './message.service';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  // #docregion providers
  providers: [ HeroService, MessageService ],
  // #enddocregion providers
  bootstrap: [ AppComponent ]
})
export class AppModule { }
