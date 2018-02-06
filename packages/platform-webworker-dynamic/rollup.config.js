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
  '@bangular/platform-webworker': 'ng.platformWebworker',
};

module.exports = {
  entry: '../../dist/packages-dist/platform-webworker-dynamic/esm5/platform-webworker-dynamic.js',
  dest:
      '../../dist/packages-dist/platform-webworker-dynamic/bundles/platform-webworker-dynamic.umd.js',
  format: 'umd',
  exports: 'named',
  amd: {id: '@bangular/platform-webworker-dynamic'},
  moduleName: 'ng.platformWebworkerDynamic',
  plugins: [resolve(), sourcemaps()],
  external: Object.keys(globals),
  globals: globals
};
