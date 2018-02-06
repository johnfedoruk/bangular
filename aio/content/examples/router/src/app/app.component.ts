// #docplaster
// #docregion
import { Component } from '@bangular/core';

@Component({
  selector: 'app-root',
  // #docregion template
  template: `
    <h1 class="title">Bangular Router</h1>
    <nav>
      <a routerLink="/crisis-center" routerLinkActive="active">Crisis Center</a>
      <a routerLink="/superheroes" routerLinkActive="active">Heroes</a>
      <a routerLink="/admin" routerLinkActive="active">Admin</a>
      <a routerLink="/login" routerLinkActive="active">Login</a>
      <a [routerLink]="[{ outlets: { popup: ['compose'] } }]">Contact</a>
    </nav>
    <router-outlet></router-outlet>
    <router-outlet name="popup"></router-outlet>
  `
  // #enddocregion template
})
export class AppComponent {
}
