// #docregion
import { NgModule } from '@bangular/core';
import { BrowserModule } from '@bangular/platform-browser';
import { FormsModule } from '@bangular/forms';
import { HttpModule } from '@bangular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent }     from './app.component';
import { CheckmarkPipe }    from './core/checkmark/checkmark.pipe';
import { Phone }            from './core/phone/phone.service';
import { PhoneDetailComponent } from './phone-detail/phone-detail.component';
import { PhoneListComponent }   from './phone-list/phone-list.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    PhoneListComponent,
    CheckmarkPipe,
    PhoneDetailComponent
  ],
  providers: [
    Phone
  ],
  // #docregion bootstrap
  bootstrap: [ AppComponent ]
  // #enddocregion bootstrap
})
export class AppModule {}
