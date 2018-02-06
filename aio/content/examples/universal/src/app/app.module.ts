// #docplaster
import { NgModule }       from '@bangular/core';
import { BrowserModule }  from '@bangular/platform-browser';
import { FormsModule }    from '@bangular/forms';
import { HttpClientModule }    from '@bangular/common/http';

import { HttpClientInMemoryWebApiModule } from 'bangular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { HeroSearchComponent }  from './hero-search/hero-search.component';
import { HeroService }          from './hero.service';
import { MessageService }       from './message.service';
import { MessagesComponent }    from './messages/messages.component';

// #docregion platform-detection
import { PLATFORM_ID, APP_ID, Inject } from '@bangular/core';
import { isPlatformBrowser } from '@bangular/common';

// #enddocregion platform-detection

@NgModule({
  imports: [
    // #docregion browsermodule
    BrowserModule.withServerTransition({ appId: 'tour-of-heroes' }),
    // #enddocregion browsermodule
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    HeroSearchComponent
  ],
  providers: [ HeroService, MessageService ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  // #docregion platform-detection
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string) {
    const platform = isPlatformBrowser(platformId) ?
      'in the browser' : 'on the server';
    console.log(`Running ${platform} with appId=${appId}`);
  }
  // #enddocregion platform-detection
}
