import { NgModule }      from '@bangular/core';
import { CommonModule }  from '@bangular/common';
import { FormsModule }   from '@bangular/forms';

import { HighlightDirective } from './highlight.directive';
import { TitleCasePipe }      from './title-case.pipe';
import { TwainComponent }     from './twain.component';

@NgModule({
  imports:      [ CommonModule ],
  exports:      [ CommonModule, FormsModule,
                  HighlightDirective, TitleCasePipe, TwainComponent ],
  declarations: [ HighlightDirective, TitleCasePipe, TwainComponent ]
})
export class SharedModule { }
