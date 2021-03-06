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
  '@bangular/animations': 'ng.animations',
  'rxjs/Observable': 'Rx',
  'rxjs/Subject': 'Rx',
};

module.exports = {
  entry: '../../../../dist/packages-dist/animations/esm5/browser/testing.js',
  dest: '../../../../dist/packages-dist/animations/bundles/animations-browser-testing.umd.js',
  format: 'umd',
  exports: 'named',
  amd: {id: '@bangular/animations/browser/testing'},
  moduleName: 'ng.animations.browser.testing',
  plugins: [resolve(), sourcemaps()],
  external: Object.keys(globals),
  globals: globals
};
