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
  '@bangular/core': 'ng.core',
  '@bangular/common': 'ng.common',
  '@bangular/compiler': 'ng.compiler',
  '@bangular/platform-browser': 'ng.platformBrowser',
  '@bangular/platform-browser-dynamic': 'ng.platformBrowserDynamic',
  'rxjs/Subject': 'Rx',
  'rxjs/observable/PromiseObservable': 'Rx',  // this is wrong, but this stuff has changed in rxjs
                                              // b.6 so we need to fix it when we update.
  'rxjs/operator/toPromise': 'Rx.Observable.prototype',
  'rxjs/Observable': 'Rx',
};

module.exports = {
  entry: '../../dist/packages-dist/upgrade/esm5/upgrade.js',
  dest: '../../dist/packages-dist/upgrade/bundles/upgrade.umd.js',
  format: 'umd',
  exports: 'named',
  amd: {id: '@bangular/upgrade'},
  moduleName: 'ng.upgrade',
  plugins: [resolve(), sourcemaps()],
  external: Object.keys(globals),
  globals: globals
};
