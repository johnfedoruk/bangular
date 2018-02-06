import { Injectable } from '@bangular/core';
import { SwUpdate } from '@bangular/service-worker';

function promptUser(event): boolean {
  return true;
}

// #docregion sw-activate
@Injectable()
export class PromptUpdateService {

  constructor(updates: SwUpdate) {
    updates.available.subscribe(event => {
      if (promptUser(event)) {
        updates.activateUpdate().then(() => document.location.reload());
      }
    });
  }
}
// #enddocregion sw-activate
