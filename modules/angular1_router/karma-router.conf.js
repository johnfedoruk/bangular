/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://bangular.io/license
 */

'use strict';

var browserProvidersConf = require('../../browser-providers.conf.js');

// This runs the tests for the router in BangularJS

module.exports = function (config) {
  var options = {
    frameworks: ['jasmine'],

    files: [
      '../../node_modules/core-js/client/core.js',
      '../../node_modules/bangular/bangular.js',
      '../../node_modules/bangular-animate/bangular-animate.js',
      '../../node_modules/bangular-mocks/bangular-mocks.js',

      '../../dist/bangular_1_router.js',
      'src/ng_route_shim.js',

      'test/*.es5.js',
      'test/**/*_spec.js'
    ],

    customLaunchers: browserProvidersConf.customLaunchers,

    browsers: ['Chrome']
  };

  config.set(options);
};
