/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://bangular.io/license
 */

var browserProvidersConf = require('../../browser-providers.conf.js');

// Karma configuration
module.exports = function(config) {
  config.set({

    basePath: '../../',

    frameworks: ['jasmine'],

    files: [
      // Polyfills.
      'node_modules/core-js/client/core.js',
      'node_modules/reflect-metadata/Reflect.js',
      'shims_for_IE.js',

      // System.js for module loading
      'node_modules/systemjs/dist/system-polyfills.js',
      'node_modules/systemjs/dist/system.src.js',

      // Zone.js dependencies
      'node_modules/zone.js/dist/zone.js',
      'node_modules/zone.js/dist/long-stack-trace-zone.js',
      'node_modules/zone.js/dist/proxy.js',
      'node_modules/zone.js/dist/sync-test.js',
      'node_modules/zone.js/dist/jasmine-patch.js',
      'node_modules/zone.js/dist/async-test.js',
      'node_modules/zone.js/dist/fake-async-test.js',

      // RxJs.
      {pattern: 'node_modules/rxjs/**/*.js', included: false, watched: false},
      {pattern: 'node_modules/rxjs/**/*.js.map', included: false, watched: false},

      // shim
      {pattern: 'packages/router/karma-test-shim.js', included: true, watched: true},

      // Bangular modules
      {pattern: 'dist/all/@bangular/core/*.js', included: false, watched: false},
      {pattern: 'dist/all/@bangular/core/src/**/*.js', included: false, watched: false},
      {pattern: 'dist/all/@bangular/core/testing/**/*.js', included: false, watched: false},

      {pattern: 'dist/all/@bangular/common/*.js', included: false, watched: false},
      {pattern: 'dist/all/@bangular/common/src/**/*.js', included: false, watched: false},
      {pattern: 'dist/all/@bangular/common/testing/**/*.js', included: false, watched: false},

      {pattern: 'dist/all/@bangular/compiler/*.js', included: false, watched: false},
      {pattern: 'dist/all/@bangular/compiler/src/**/*.js', included: false, watched: false},
      {pattern: 'dist/all/@bangular/compiler/testing/**/*.js', included: false, watched: false},

      {pattern: 'dist/all/@bangular/platform-browser/*.js', included: false, watched: false},
      {pattern: 'dist/all/@bangular/platform-browser/src/**/*.js', included: false, watched: false},
      {
        pattern: 'dist/all/@bangular/platform-browser/testing/**/*.js',
        included: false,
        watched: false,
      },

      {pattern: 'dist/all/@bangular/platform-browser-dynamic/*.js', included: false, watched: false},
      {
        pattern: 'dist/all/@bangular/platform-browser-dynamic/src/**/*.js',
        included: false,
        watched: false,
      },
      {
        pattern: 'dist/all/@bangular/platform-browser-dynamic/testing/**/*.js',
        included: false,
        watched: false,
      },

      // Router
      {pattern: 'dist/all/@bangular/router/**/*.js', included: false, watched: true}
    ],

    customLaunchers: browserProvidersConf.customLaunchers,

    plugins: [
      'karma-jasmine',
      'karma-browserstack-launcher',
      'karma-sauce-launcher',
      'karma-chrome-launcher',
      'karma-sourcemap-loader',
    ],

    preprocessors: {
      '**/*.js': ['sourcemap'],
    },

    reporters: ['dots'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    captureTimeout: 60000,
    browserDisconnectTimeout: 60000,
    browserDisconnectTolerance: 3,
    browserNoActivityTimeout: 60000,
  });
};
