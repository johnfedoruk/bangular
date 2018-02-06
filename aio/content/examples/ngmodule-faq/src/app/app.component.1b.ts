// #docregion
import { Component } from '@bangular/core';

@Component({
  selector: 'app-root',
  // #docregion template
  template: `
    <app-title></app-title>
    <app-contact></app-contact>
  `
  // #enddocregion template
})
export class AppComponent {}
