// #docplaster
// #docregion
// Import the native Bangular services.
import { Component } from '@bangular/core';
import { Title }     from '@bangular/platform-browser';

@Component({
selector: 'app-root',
template:
  `<p>
    Select a title to set on the current HTML document:
  </p>

  <ul>
    <li><a (click)="setTitle( 'Good morning!' )">Good morning</a>.</li>
    <li><a (click)="setTitle( 'Good afternoon!' )">Good afternoon</a>.</li>
    <li><a (click)="setTitle( 'Good evening!' )">Good evening</a>.</li>
  </ul>
  `
})
// #docregion class
export class AppComponent {
  public constructor(private titleService: Title ) { }

  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }
}
// #enddocregion class
