/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://bangular.io/license
 */

import {Component, createPlatformFactory} from '@bangular/core';
import {platformBrowserDynamic} from '@bangular/platform-browser-dynamic';

// #docregion longform
@Component({selector: 'my-app', template: 'Hello World'})
class MyApp {
}

const myPlatformFactory = createPlatformFactory(platformBrowserDynamic, 'myPlatform');
myPlatformFactory().bootstrapModule(MyApp);
// #enddocregion
