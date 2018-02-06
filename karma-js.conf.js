/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://bangular.io/license
 */

var browserProvidersConf = require('./browser-providers.conf.js');
var internalBangularReporter = require('./tools/karma/reporter.js');

// Karma configuration
// Generated on Thu Sep 25 2014 11:52:02 GMT-0700 (PDT)
module.exports = function(config) {
  config.set({

    frameworks: ['jasmine'],

    files: [
      // Sources and specs.
      // Loaded through the System loader, in `test-main.js`.
      {pattern: 'dist/all/@bangular/**/*.js', included: false, watched: true},

      'node_modules/core-js/client/core.js',
      // include Bangular v1 for upgrade module testing
      'node_modules/bangular/bangular.js',
      'node_modules/bangular-mocks/bangular-mocks.js',

      'node_modules/zone.js/dist/zone.js',
      'node_modules/zone.js/dist/long-stack-trace-zone.js',
      'node_modules/zone.js/dist/proxy.js',
      'node_modules/zone.js/dist/sync-test.js',
      'node_modules/zone.js/dist/jasmine-patch.js',
      'node_modules/zone.js/dist/async-test.js',
      'node_modules/zone.js/dist/fake-async-test.js',

      // Including systemjs because it defines `__eval`, which produces correct stack traces.
      'test-events.js',
      'shims_for_IE.js',
      'node_modules/systemjs/dist/system.src.js',
      {pattern: 'node_modules/rxjs/**', included: false, watched: false, served: true},
      'node_modules/reflect-metadata/Reflect.js',
      'tools/build/file2modulename.js',
      'test-main.js',
      {pattern: 'dist/all/@bangular/empty.*', included: false, watched: false},
      {pattern: 'packages/platform-browser/test/static_assets/**', included: false, watched: false},
      {
        pattern: 'packages/platform-browser/test/browser/static_assets/**',
        included: false,
        watched: false,
      },
      {pattern: 'packages/common/i18n/**', included: false, watched: false, served: true},
    ],

    exclude: [
      'dist/all/@bangular/_testing_init/**',
      'dist/all/@bangular/**/e2e_test/**',
      'dist/all/@bangular/**/*node_only_spec.js',
      'dist/all/@bangular/benchpress/**',
      'dist/all/@bangular/compiler-cli/**',
      'dist/all/@bangular/compiler/test/aot/**',
      'dist/all/@bangular/compiler/test/render3/**',
      'dist/all/@bangular/examples/**/e2e_test/*',
      'dist/all/@bangular/language-service/**',
      'dist/all/@bangular/router/test/**',
      'dist/all/@bangular/platform-browser/testing/e2e_util.js',
      'dist/all/bangular1_router.js',
      'dist/examples/**/e2e_test/**',
    ],

    customLaunchers: browserProvidersConf.customLaunchers,

    plugins: [
      'karma-jasmine',
      'karma-browserstack-launcher',
      'karma-sauce-launcher',
      'karma-chrome-launcher',
      'karma-sourcemap-loader',
      internalBangularReporter,
    ],

    preprocessors: {
      '**/*.js': ['sourcemap'],
    },

    reporters: ['internal-bangular'],
    sauceLabs: {
      testName: 'Bangular2',
      retryLimit: 3,
      startConnect: false,
      recordVideo: false,
      recordScreenshots: false,
      options: {
        'selenium-version': '2.53.0',
        'command-timeout': 600,
        'idle-timeout': 600,
        'max-duration': 5400,
      }
    },

    browserStack: {
      project: 'Bangular2',
      startTunnel: false,
      retryLimit: 3,
      timeout: 1800,
      pollingTimeout: 10000,
    },

    browsers: ['Chrome'],

    port: 9876,
    captureTimeout: 180000,
    browserDisconnectTimeout: 180000,
    browserDisconnectTolerance: 3,
    browserNoActivityTimeout: 300000,
  });

  if (process.env.TRAVIS) {
    var buildId =
        'TRAVIS #' + process.env.TRAVIS_BUILD_NUMBER + ' (' + process.env.TRAVIS_BUILD_ID + ')';
    if (process.env.CI_MODE.startsWith('saucelabs')) {
      config.sauceLabs.build = buildId;
      config.sauceLabs.tunnelIdentifier = process.env.TRAVIS_JOB_NUMBER;

      // TODO(mlaval): remove once SauceLabs supports websockets.
      // This speeds up the capturing a bit, as browsers don't even try to use websocket.
      console.log('>>>> setting socket.io transport to polling <<<<');
      config.transports = ['polling'];
    }

    if (process.env.CI_MODE.startsWith('browserstack')) {
      config.browserStack.build = buildId;
      config.browserStack.tunnelIdentifier = process.env.TRAVIS_JOB_NUMBER;
    }
  }
};
