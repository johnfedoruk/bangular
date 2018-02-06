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
  '@bangular/core': 'ng.core'
};

module.exports = {
  entry: '../../../dist/packages-dist/upgrade/esm5/static.js',
  dest: '../../../dist/packages-dist/upgrade/bundles/upgrade-static.umd.js',
  format: 'umd',
  exports: 'named',
  amd: {id: '@bangular/upgrade/static'},
  moduleName: 'ng.upgrade.static',
  plugins: [resolve(), sourcemaps()],
  external: Object.keys(globals),
  globals: globals
};
