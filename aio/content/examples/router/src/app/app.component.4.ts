// #docregion
import { Component } from '@bangular/core';

@Component({
  selector: 'app-root',
  // #docregion template
  template: `
    <h1 class="title">Bangular Router</h1>
    <nav>
      <a routerLink="/crisis-center" routerLinkActive="active">Crisis Center</a>
      <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
      // #docregion contact-link
      <a [routerLink]="[{ outlets: { popup: ['compose'] } }]">Contact</a>
      // #enddocregion contact-link
    </nav>
    // #docregion outlets
    <router-outlet></router-outlet>
    <router-outlet name="popup"></router-outlet>
    // #enddocregion outlets
    `
  // #enddocregion template
})
export class AppComponent { }
