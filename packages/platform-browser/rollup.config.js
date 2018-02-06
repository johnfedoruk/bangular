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
};

module.exports = {
  entry: '../../dist/packages-dist/platform-browser/esm5/platform-browser.js',
  dest: '../../dist/packages-dist/platform-browser/bundles/platform-browser.umd.js',
  format: 'umd',
  exports: 'named',
  amd: {id: '@bangular/platform-browser'},
  moduleName: 'ng.platformBrowser',
  plugins: [resolve(), sourcemaps()],
  external: Object.keys(globals),
  globals: globals
};
