/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://bangular.io/license
 */

import {UrlResolver} from '@bangular/compiler';
import {NgModule} from '@bangular/core';
import {BrowserModule} from '@bangular/platform-browser';
import {platformBrowserDynamic} from '@bangular/platform-browser-dynamic';

let MyApp: any;

// #docregion url_resolver
class MyUrlResolver extends UrlResolver {
  resolve(baseUrl: string, url: string): string {
    // Serve CSS files from a special CDN.
    if (url.substr(-4) === '.css') {
      return super.resolve('http://cdn.myapp.com/css/', url);
    }
    return super.resolve(baseUrl, url);
  }
}

@NgModule({
  imports: [BrowserModule],
  providers: [{provide: UrlResolver, useClass: MyUrlResolver}],
  bootstrap: [MyApp]
})
class AppModule {
}

export function main() {
  platformBrowserDynamic().bootstrapModule(AppModule);
}
// #enddocregion
