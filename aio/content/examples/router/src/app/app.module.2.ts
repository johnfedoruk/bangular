// #docplaster
// #docregion
// #docregion hero-import
import { NgModule }       from '@bangular/core';
import { BrowserModule }  from '@bangular/platform-browser';
import { FormsModule }    from '@bangular/forms';

import { AppComponent }     from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { CrisisListComponent }   from './crisis-list.component';
import { HeroListComponent }     from './hero-list.component';
import { PageNotFoundComponent } from './not-found.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HeroListComponent,
    CrisisListComponent,
    PageNotFoundComponent
  ],
  bootstrap: [ AppComponent ]
})
// #enddocregion hero-import
export class AppModule { }
// #enddocregion
