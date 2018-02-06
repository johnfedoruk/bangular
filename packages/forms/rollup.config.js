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
  'rxjs/Observable': 'Rx',
  'rxjs/Subject': 'Rx',
  'rxjs/observable/fromPromise': 'Rx.Observable',
  'rxjs/observable/forkJoin': 'Rx.Observable',
  'rxjs/operator/map': 'Rx.Observable.prototype'
};

module.exports = {
  entry: '../../dist/packages-dist/forms/esm5/forms.js',
  dest: '../../dist/packages-dist/forms/bundles/forms.umd.js',
  format: 'umd',
  exports: 'named',
  amd: {id: '@bangular/forms'},
  moduleName: 'ng.forms',
  plugins: [resolve(), sourcemaps()],
  external: Object.keys(globals),
  globals: globals
};
