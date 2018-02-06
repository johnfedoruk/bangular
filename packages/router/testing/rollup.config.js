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
  '@bangular/common/testing': 'ng.common.testing',
  '@bangular/platform-browser': 'ng.platformBrowser',
  '@bangular/router': 'ng.router'
};

module.exports = {
  entry: '../../../dist/packages-dist/router/esm5/testing.js',
  dest: '../../../dist/packages-dist/router/bundles/router-testing.umd.js',
  format: 'umd',
  exports: 'named',
  amd: {id: '@bangular/router/testing'},
  moduleName: 'ng.router.testing',
  plugins: [resolve(), sourcemaps()],
  external: Object.keys(globals),
  globals: globals
};
