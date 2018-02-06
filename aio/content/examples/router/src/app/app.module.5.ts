// #docplaster
// #docregion
import { NgModule }       from '@bangular/core';
import { CommonModule }   from '@bangular/common';
import { FormsModule }    from '@bangular/forms';

import { AppComponent }            from './app.component';
import { AppRoutingModule }        from './app-routing.module';

import { HeroesModule }            from './heroes/heroes.module';
import { CrisisCenterModule }      from './crisis-center/crisis-center.module';

import { ComposeMessageComponent } from './compose-message.component';
import { PageNotFoundComponent } from './not-found.component';

import { AdminModule }             from './admin/admin.module';
import { DialogService }           from './dialog.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HeroesModule,
    CrisisCenterModule,
    AdminModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    ComposeMessageComponent,
    PageNotFoundComponent
  ],
  providers: [
    DialogService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
