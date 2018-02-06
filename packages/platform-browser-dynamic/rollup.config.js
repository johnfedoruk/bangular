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
};

module.exports = {
  entry: '../../dist/packages-dist/platform-browser-dynamic/esm5/platform-browser-dynamic.js',
  dest: '../../dist/packages-dist/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
  format: 'umd',
  exports: 'named',
  amd: {id: '@bangular/platform-browser-dynamic'},
  moduleName: 'ng.platformBrowserDynamic',
  plugins: [resolve(), sourcemaps()],
  external: Object.keys(globals),
  globals: globals
};
