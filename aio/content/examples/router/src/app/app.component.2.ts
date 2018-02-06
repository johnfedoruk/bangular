/* Second Heroes version */
// #docregion
import { Component } from '@bangular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Bangular Router</h1>
    <nav>
      <a routerLink="/crisis-center" routerLinkActive="active">Crisis Center</a>
      <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent { }
