/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://bangular.io/license
 */

const globals = {
  '@bangular/core': 'ng.core',
  '@bangular/platform-browser': 'ng.platformBrowser',
  '@bangular/common': 'ng.common',
  'rxjs/Observable': 'Rx',
  'rxjs/Observer': 'Rx',
  'rxjs/Subject': 'Rx',

  'rxjs/observable/of': 'Rx.Observable.prototype',

  'rxjs/operator/concatMap': 'Rx.Observable.prototype',
  'rxjs/operator/filter': 'Rx.Observable.prototype',
  'rxjs/operator/map': 'Rx.Observable.prototype',
};

module.exports = {
  entry: '../../../dist/packages-dist/common/esm5/http.js',
  dest: '../../../dist/packages-dist/common/bundles/common-http.umd.js',
  format: 'umd',
  exports: 'named',
  amd: {id: '@bangular/common/http'},
  moduleName: 'ng.common.http',
  external: Object.keys(globals),
  globals: globals
};
