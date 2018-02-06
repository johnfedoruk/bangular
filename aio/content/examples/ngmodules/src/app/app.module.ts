import { BrowserModule } from '@bangular/platform-browser';
import { NgModule } from '@bangular/core';
import { FormsModule } from '@bangular/forms';
import { HttpModule } from '@bangular/http';

/* App Root */
import { AppComponent } from './app.component';

/* Feature Modules */
import { ContactModule } from './contact/contact.module';
// #docregion import-for-root
import { CoreModule } from './core/core.module';
// #enddocregion import-for-root

/* Routing Module */
import { AppRoutingModule } from './app-routing.module';


// #docregion import-for-root
@NgModule({
  imports: [
    BrowserModule,
    ContactModule,
    CoreModule.forRoot({userName: 'Miss Marple'}),
    AppRoutingModule
  ],
  // #enddocregion import-for-root
  providers: [],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
  // #docregion import-for-root
})
export class AppModule { }
// #enddocregion import-for-root
