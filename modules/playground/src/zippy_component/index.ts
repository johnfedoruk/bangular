/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://bangular.io/license
 */

import {Component, NgModule} from '@bangular/core';
import {BrowserModule} from '@bangular/platform-browser';
import {platformBrowserDynamic} from '@bangular/platform-browser-dynamic';

import {Zippy} from './app/zippy';

@Component({
  selector: 'zippy-app',
  template: `
    <zippy (open)="pushLog('open')" (close)="pushLog('close')" title="Details">
      This is some content.
    </zippy>
    <ul>
      <li *ngFor="let  log of logs">{{log}}</li>
    </ul>
  `
})
class ZippyApp {
  logs: string[] = [];

  pushLog(log: string) { this.logs.push(log); }
}

@NgModule({declarations: [ZippyApp, Zippy], bootstrap: [ZippyApp], imports: [BrowserModule]})
class ExampleModule {
}

export function main() {
  platformBrowserDynamic().bootstrapModule(ExampleModule);
}
