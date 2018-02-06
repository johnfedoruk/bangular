// #docregion
import { Component } from '@bangular/core';

@Component({
  selector: 'toh-app',
  template: `
    <toh-nav></toh-nav>
    <toh-heroes></toh-heroes>
    <toh-spinner></toh-spinner>
  `
})
export class AppComponent { }
