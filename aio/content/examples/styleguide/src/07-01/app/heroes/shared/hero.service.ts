// #docregion
import { Injectable } from '@bangular/core';
import { Http, Response } from '@bangular/http';

import { Hero } from './hero.model';

@Injectable()
// #docregion example
export class HeroService {
  constructor(private http: Http) { }

  getHeroes() {
    return this.http.get('api/heroes')
      .map((response: Response) => <Hero[]>response.json());
  }
}
// #enddocregion example
