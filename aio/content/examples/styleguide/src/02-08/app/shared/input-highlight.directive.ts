// #docregion
import { Directive, ElementRef } from '@bangular/core';

@Directive({ selector: 'input'})
/** Highlight the attached input text element in blue */
export class InputHighlightDirective {
  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'powderblue';
  }
}
