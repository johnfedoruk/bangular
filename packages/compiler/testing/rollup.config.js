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
  '@bangular/core/testing': 'ng.core.testing',
  '@bangular/compiler': 'ng.compiler',
  'rxjs/Observable': 'Rx',
  'rxjs/Subject': 'Rx'
};

module.exports = {
  entry: '../../../dist/packages-dist/compiler/esm5/testing.js',
  dest: '../../../dist/packages-dist/compiler/bundles/compiler-testing.umd.js',
  format: 'umd',
  exports: 'named',
  amd: {id: '@bangular/compiler/testing'},
  moduleName: 'ng.compiler.testing',
  plugins: [resolve(), sourcemaps()],
  external: Object.keys(globals),
  globals: globals
};
