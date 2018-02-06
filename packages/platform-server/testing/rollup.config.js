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
  '@bangular/compiler/testing': 'ng.compiler.testing',
  '@bangular/platform-browser': 'ng.platformBrowser',
  '@bangular/platform-browser/animations': 'ng.platformBrowser.animations',
  '@bangular/platform-server': 'ng.platformServer',
  '@bangular/platform-browser-dynamic/testing': 'ng.platformBrowserDynamic.testing'
};

module.exports = {
  entry: '../../../dist/packages-dist/platform-server/esm5/testing.js',
  dest: '../../../dist/packages-dist/platform-server/bundles/platform-server-testing.umd.js',
  format: 'umd',
  exports: 'named',
  amd: {id: '@bangular/platform-server/testing'},
  moduleName: 'ng.platformServer.testing',
  plugins: [resolve(), sourcemaps()],
  external: Object.keys(globals),
  globals: globals
};
