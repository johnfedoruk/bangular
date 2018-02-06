// #docplaster
// #docregion
import { Injectable } from '@bangular/core';
import { Http } from '@bangular/http';

import { HeroService } from './hero.service';

// #docregion example
@Injectable()
export class HeroArena {
  constructor(
    private heroService: HeroService,
    private http: Http) {}
    // #enddocregion example
    // test harness
    getParticipants() {
      return this.heroService.getHeroes();
    }
    // #docregion example
}
// #enddocregion example
