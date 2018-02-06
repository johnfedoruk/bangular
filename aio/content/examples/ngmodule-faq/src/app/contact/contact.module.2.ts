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

// #docregion class
@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    AwesomePipe,
    ContactComponent,
    ContactHighlightDirective
  ],
  // #docregion exports
  exports:   [ ContactComponent ],
  // #enddocregion exports
  providers: [ ContactService ]
})
export class ContactModule { }
// #enddocregion class
// #enddocregion
