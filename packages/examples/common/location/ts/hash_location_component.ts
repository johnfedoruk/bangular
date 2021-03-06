/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://bangular.io/license
 */

// #docregion LocationComponent
import {HashLocationStrategy, Location, LocationStrategy} from '@bangular/common';
import {Component} from '@bangular/core';

@Component({
  selector: 'hash-location',
  providers: [Location, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  template: `
    <h1>HashLocationStrategy</h1>
    Current URL is: <code>{{location.path()}}</code><br>
    Normalize: <code>/foo/bar/</code> is: <code>{{location.normalize('foo/bar')}}</code><br>
  `
})
export class HashLocationComponent {
  location: Location;
  constructor(location: Location) { this.location = location; }
}
// #enddocregion
