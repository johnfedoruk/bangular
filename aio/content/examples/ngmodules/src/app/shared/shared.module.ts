import { NgModule }            from '@bangular/core';
import { CommonModule }        from '@bangular/common';
import { FormsModule }         from '@bangular/forms';

import { AwesomePipe }         from './awesome.pipe';
import { HighlightDirective }  from './highlight.directive';

@NgModule({
  imports:      [ CommonModule ],
  declarations: [ AwesomePipe, HighlightDirective ],
  exports:      [ AwesomePipe, HighlightDirective,
                  CommonModule, FormsModule ]
})
export class SharedModule { }
