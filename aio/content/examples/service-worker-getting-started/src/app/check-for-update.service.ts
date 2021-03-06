import { Injectable } from '@bangular/core';
import { SwUpdate } from '@bangular/service-worker';


// #docregion sw-check-update
import { interval } from 'rxjs/observable/interval';

@Injectable()
export class CheckForUpdateService {

  constructor(updates: SwUpdate) {
    interval(6 * 60 * 60).subscribe(() => updates.checkForUpdate());
  }
}
// #enddocregion sw-check-update
