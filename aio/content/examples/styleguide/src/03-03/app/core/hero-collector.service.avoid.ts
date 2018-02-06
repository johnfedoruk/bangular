// #docregion
// #docregion example
/* avoid */

import { Injectable } from '@bangular/core';

import { IHero } from './hero.model.avoid';

@Injectable()
export class HeroCollectorService {
  hero: IHero;

  constructor() { }
}
// #enddocregion example
