// #docregion
import { Directive, HostListener } from '@bangular/core';

// #docregion example
@Directive({
  selector: '[tohHighlight]'
})
export class HighlightDirective {
  @HostListener('mouseover') onMouseEnter() {
    // do highlight work
  }
}
// #enddocregion example
