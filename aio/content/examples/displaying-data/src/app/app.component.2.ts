// #docregion
import { Component } from '@bangular/core';

@Component({
  selector: 'app-root',
  // #docregion template
  template: `
    <h1>{{title}}</h1>
    <h2>My favorite hero is: {{myHero}}</h2>
    <p>Heroes:</p>
    <ul>
  // #docregion li
      <li *ngFor="let hero of heroes">
        {{ hero }}
      </li>
  // #enddocregion li
    </ul>
  `
  // #enddocregion template
})
// #docregion class
export class AppComponent {
  title = 'Tour of Heroes';
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  myHero = this.heroes[0];
}
