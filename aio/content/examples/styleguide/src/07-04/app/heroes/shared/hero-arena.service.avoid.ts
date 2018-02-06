// #docregion
import { Inject } from '@bangular/core';
import { Http } from '@bangular/http';

import { HeroService } from './hero.service';
// #docregion example
/* avoid */

export class HeroArena {
  constructor(
      @Inject(HeroService) private heroService: HeroService,
      @Inject(Http) private http: Http) {}
}
// #enddocregion example
