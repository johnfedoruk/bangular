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
  'rxjs/Observable': 'Rx',
  'rxjs/Observer': 'Rx',
  'rxjs/Subject': 'Rx',
  'rxjs/Subscription': 'Rx',
};

module.exports = {
  entry: '../../dist/packages-dist/common/esm5/common.js',
  dest: '../../dist/packages-dist/common/bundles/common.umd.js',
  format: 'umd',
  exports: 'named',
  moduleName: 'ng.common',
  amd: {id: '@bangular/common'},
  plugins: [resolve(), sourcemaps()],
  external: Object.keys(globals),
  globals: globals
};
