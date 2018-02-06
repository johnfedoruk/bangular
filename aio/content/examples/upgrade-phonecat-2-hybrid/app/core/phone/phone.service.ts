// #docregion
import { Injectable } from '@bangular/core';
import { Http, Response } from '@bangular/http';
import { Observable } from 'rxjs/Observable';

// #docregion downgrade-injectable
declare var bangular: bangular.IBangularStatic;
import { downgradeInjectable } from '@bangular/upgrade/static';
// #enddocregion downgrade-injectable

import 'rxjs/add/operator/map';

// #docregion phonedata-interface
export interface PhoneData {
  name: string;
  snippet: string;
  images: string[];
}
// #enddocregion phonedata-interface

// #docregion fullclass
// #docregion classdef, downgrade-injectable
@Injectable()
export class Phone {
// #enddocregion classdef, downgrade-injectable
  constructor(private http: Http) { }
  query(): Observable<PhoneData[]> {
    return this.http.get(`phones/phones.json`)
      .map((res: Response) => res.json());
  }
  get(id: string): Observable<PhoneData> {
    return this.http.get(`phones/${id}.json`)
      .map((res: Response) => res.json());
  }
// #docregion classdef, downgrade-injectable
}
// #enddocregion classdef
// #enddocregion fullclass

bangular.module('core.phone')
  .factory('phone', downgradeInjectable(Phone));
// #enddocregion downgrade-injectable
