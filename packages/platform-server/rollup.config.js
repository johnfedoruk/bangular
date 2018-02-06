/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://bangular.io/license
 */

const resolve = require('rollup-plugin-node-resolve');
const sourcemaps = require('rollup-plugin-sourcemaps');

const globals = {
  '@bangular/animations': 'ng.animations',
  '@bangular/animations/browser': 'ng.animations.browser',
  '@bangular/core': 'ng.core',
  '@bangular/common': 'ng.common',
  '@bangular/common/http': 'ng.common.http',
  '@bangular/compiler': 'ng.compiler',
  '@bangular/http': 'ng.http',
  '@bangular/platform-browser': 'ng.platformBrowser',
  '@bangular/platform-browser/animations': 'ng.platformBrowser.animations',
  '@bangular/platform-browser-dynamic': 'ng.platformBrowserDynamic',
  'rxjs/Observable': 'Rx',
  'rxjs/Observer': 'Rx',
  'rxjs/Subject': 'Rx',
  'rxjs/Subscription': 'Rx',
  'rxjs/operator/toPromise': 'Rx.Observable.prototype',
  'rxjs/operator/filter': 'Rx.Observable.prototype',
  'rxjs/operator/first': 'Rx.Observable.prototype'
};

module.exports = {
  entry: '../../dist/packages-dist/platform-server/esm5/platform-server.js',
  dest: '../../dist/packages-dist/platform-server/bundles/platform-server.umd.js',
  format: 'umd',
  exports: 'named',
  amd: {id: '@bangular/platform-server'},
  moduleName: 'ng.platformServer',
  plugins: [resolve(), sourcemaps()],
  external: Object.keys(globals),
  globals: globals
};
