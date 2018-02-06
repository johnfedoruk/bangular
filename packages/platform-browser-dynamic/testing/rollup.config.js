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
  '@bangular/common': 'ng.common',
  '@bangular/compiler': 'ng.compiler',
  '@bangular/compiler/testing': 'ng.compiler.testing',
  '@bangular/platform-browser': 'ng.platformBrowser',
  '@bangular/platform-browser/testing': 'ng.platformBrowser.testing',
  '@bangular/platform-browser-dynamic': 'ng.platformBrowserDynamic'
};

module.exports = {
  entry: '../../../dist/packages-dist/platform-browser-dynamic/esm5/testing.js',
  dest:
      '../../../dist/packages-dist/platform-browser-dynamic/bundles/platform-browser-dynamic-testing.umd.js',
  format: 'umd',
  exports: 'named',
  amd: {id: '@bangular/platform-browser-dynamic/testing'},
  moduleName: 'ng.platformBrowserDynamic.testing',
  plugins: [resolve(), sourcemaps()],
  external: Object.keys(globals),
  globals: globals
};
