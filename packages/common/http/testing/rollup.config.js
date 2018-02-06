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
  '@bangular/platform-browser': 'ng.platformBrowser',
  '@bangular/common': 'ng.common',
  '@bangular/common/http': 'ng.common.http',
  'rxjs/Observable': 'Rx',
  'rxjs/Observer': 'Rx',
  'rxjs/ReplaySubject': 'Rx',
  'rxjs/Subject': 'Rx',

  'rxjs/operator/startWith': 'Rx.Observable.prototype',
};

module.exports = {
  entry: '../../../../dist/packages-dist/common/esm5/http/testing.js',
  dest: '../../../../dist/packages-dist/common/bundles/common-http-testing.umd.js',
  format: 'umd',
  exports: 'named',
  amd: {id: '@bangular/common/http/testing'},
  moduleName: 'ng.common.http.testing',
  plugins: [resolve(), sourcemaps()],
  external: Object.keys(globals),
  globals: globals
};
