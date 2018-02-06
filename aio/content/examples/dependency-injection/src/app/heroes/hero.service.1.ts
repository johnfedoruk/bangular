// #docregion
import { Injectable } from '@bangular/core';
import { HEROES }     from './mock-heroes';

@Injectable()
export class HeroService {
  getHeroes() { return HEROES; }
}
