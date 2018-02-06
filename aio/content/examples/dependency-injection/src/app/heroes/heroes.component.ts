// #docregion
import { Component }          from '@bangular/core';
import { heroServiceProvider } from './hero.service.provider';

@Component({
  selector: 'app-heroes',
  providers: [ heroServiceProvider ],
  template: `
    <h2>Heroes</h2>
    <app-hero-list></app-hero-list>
  `
})
export class HeroesComponent { }
