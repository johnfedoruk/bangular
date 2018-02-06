// #docregion
import { NgModule }             from '@bangular/core';
import { BrowserModule }        from '@bangular/platform-browser';
import { FormsModule }          from '@bangular/forms';
import { Routes, RouterModule } from '@bangular/router';

import { AppComponent }          from './app.component';
import { PageNotFoundComponent } from './not-found.component';

const routes: Routes = [

];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes, { useHash: true })  // .../#/crisis-center/
  ],
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  providers: [

  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
