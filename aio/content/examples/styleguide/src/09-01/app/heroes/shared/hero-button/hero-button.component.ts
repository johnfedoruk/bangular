// #docregion
import { Component, OnInit } from '@bangular/core';

// #docregion example
@Component({
  selector: 'toh-hero-button',
  template: `<button>OK</button>`
})
export class HeroButtonComponent implements OnInit {
  ngOnInit() {
    console.log('The component is initialized');
  }
}
// #enddocregion example
