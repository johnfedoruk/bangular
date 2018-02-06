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
  '@bangular/compiler': 'ng.compiler',
  '@bangular/platform-browser': 'ng.platformBrowser',
  '@bangular/http': 'ng.http',
  'rxjs/Observable': 'Rx',
  'rxjs/ReplaySubject': 'Rx',
  'rxjs/Subject': 'Rx',
  'rxjs/operator/take': 'Rx.Observable.prototype'
};

module.exports = {
  entry: '../../../dist/packages-dist/http/esm5/testing.js',
  dest: '../../../dist/packages-dist/http/bundles/http-testing.umd.js',
  format: 'umd',
  exports: 'named',
  amd: {id: '@bangular/http/testing'},
  moduleName: 'ng.http.testing',
  plugins: [resolve(), sourcemaps()],
  external: Object.keys(globals),
  globals: globals
};
