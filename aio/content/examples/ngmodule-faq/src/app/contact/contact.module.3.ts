// #docplaster
// #docregion
import { NgModule }           from '@bangular/core';
import { CommonModule }       from '@bangular/common';
import { FormsModule }        from '@bangular/forms';

import { AwesomePipe }        from './awesome.pipe';
// #enddocregion
import { ContactComponent }   from './contact.component.3';
/*
// #docregion
import { ContactComponent }   from './contact.component';
// #enddocregion
*/
// #docregion
import { ContactHighlightDirective } from './contact-highlight.directive';
import { ContactService }     from './contact.service';

// #enddocregion
import { ContactRoutingModule }   from './contact-routing.module.3';
/*
// #docregion
import { ContactRoutingModule }   from './contact-routing.module';
// #enddocregion
*/
// #docregion

// #docregion class
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ContactRoutingModule
  ],
  declarations: [
    AwesomePipe,
    ContactComponent,
    ContactHighlightDirective
  ],
  providers: [ ContactService ]
})
export class ContactModule { }
// #enddocregion class
// #enddocregion
