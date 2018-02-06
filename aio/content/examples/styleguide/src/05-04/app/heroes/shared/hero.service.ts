import { Injectable } from '@bangular/core';
import { Http }       from '@bangular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Hero }       from './hero.model';

@Injectable()
export class HeroService {

  constructor(private http: Http) {}

  getHeroes(): Observable<Hero[]> {
    return this.http.get('api/heroes')
                    .map(resp => resp.json().data as Hero[]);
  }
}
