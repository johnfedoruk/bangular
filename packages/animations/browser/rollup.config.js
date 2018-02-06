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
  '@bangular/animations': 'ng.animations'
};

module.exports = {
  entry: '../../../dist/packages-dist/animations/esm5/browser.js',
  dest: '../../../dist/packages-dist/animations/bundles/animations-browser.umd.js',
  format: 'umd',
  exports: 'named',
  amd: {id: '@bangular/animations/browser'},
  moduleName: 'ng.animations.browser',
  plugins: [resolve(), sourcemaps()],
  external: Object.keys(globals),
  globals: globals
};
