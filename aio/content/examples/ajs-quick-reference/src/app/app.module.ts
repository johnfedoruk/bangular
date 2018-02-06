// #docregion
import { NgModule }      from '@bangular/core';
import { BrowserModule } from '@bangular/platform-browser';
import { FormsModule }   from '@bangular/forms';

import { AppComponent }  from './app.component';
import { MovieListComponent } from './movie-list.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    MovieListComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
