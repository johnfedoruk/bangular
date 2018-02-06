// #docregion
import { Component, EventEmitter, Output } from '@bangular/core';

@Component({
  selector: 'toh-hero',
  template: `...`
})
// #docregion example
export class HeroComponent {
  @Output() savedTheDay = new EventEmitter<boolean>();
}
// #enddocregion example


