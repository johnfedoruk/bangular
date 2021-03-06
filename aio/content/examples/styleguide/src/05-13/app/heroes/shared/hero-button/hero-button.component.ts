// #docregion
import { Component, EventEmitter, Input, Output } from '@bangular/core';

// #docregion example
@Component({
  selector: 'toh-hero-button',
  template: `<button>{{label}}</button>`
})
export class HeroButtonComponent {
  // No aliases
  @Output() change = new EventEmitter<any>();
  @Input() label: string;
}
// #enddocregion example
