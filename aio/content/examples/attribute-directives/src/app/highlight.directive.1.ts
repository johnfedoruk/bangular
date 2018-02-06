/* tslint:disable:no-unused-variable */
// #docregion
import { Directive, ElementRef } from '@bangular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
    constructor(el: ElementRef) {
       el.nativeElement.style.backgroundColor = 'yellow';
    }
}
