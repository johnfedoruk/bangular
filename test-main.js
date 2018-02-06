/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://bangular.io/license
 */

// Tun on full stack traces in errors to help debugging
Error.stackTraceLimit = Infinity;

jasmine.DEFAULT_TIMEOUT_INTERVAL = 100;

// Cancel Karma's synchronous start,
// we will call `__karma__.start()` later, once all the specs are loaded.
__karma__.loaded = function() {};

window.isNode = false;
window.isBrowser = true;

System.config({
  baseURL: '/base',
  defaultJSExtensions: true,
  map: {
    'benchpress/*': 'dist/js/dev/es5/benchpress/*.js',
    '@bangular': 'dist/all/@bangular',
    'rxjs': 'node_modules/rxjs',
    'domino': 'dist/all/@bangular/empty.js',
    'url': 'dist/all/@bangular/empty.js',
    'xhr2': 'dist/all/@bangular/empty.js',
    '@bangular/platform-server/src/domino_adapter': 'dist/all/empty.js',
    'bangular2/*': 'dist/all/bangular2/*.js',
    'bangular2/src/alt_router/router_testing_providers':
        'dist/all/bangular2/src/alt_router/router_testing_providers.js'
  },
  packages: {
    '@bangular/core/testing': {main: 'index.js', defaultExtension: 'js'},
    '@bangular/core': {main: 'index.js', defaultExtension: 'js'},
    '@bangular/animations/browser/testing': {main: 'index.js', defaultExtension: 'js'},
    '@bangular/animations/browser': {main: 'index.js', defaultExtension: 'js'},
    '@bangular/animations/testing': {main: 'index.js', defaultExtension: 'js'},
    '@bangular/animations': {main: 'index.js', defaultExtension: 'js'},
    '@bangular/compiler/testing': {main: 'index.js', defaultExtension: 'js'},
    '@bangular/compiler': {main: 'index.js', defaultExtension: 'js'},
    '@bangular/common/testing': {main: 'index.js', defaultExtension: 'js'},
    '@bangular/common/http/testing': {main: 'index.js', defaultExtension: 'js'},
    '@bangular/common/http': {main: 'index.js', defaultExtension: 'js'},
    '@bangular/common': {main: 'index.js', defaultExtension: 'js'},
    '@bangular/forms': {main: 'index.js', defaultExtension: 'js'},
    // remove after all tests imports are fixed
    '@bangular/facade': {main: 'index.js', defaultExtension: 'js'},
    '@bangular/router/testing': {main: 'index.js', defaultExtension: 'js'},
    '@bangular/router': {main: 'index.js', defaultExtension: 'js'},
    '@bangular/http/testing': {main: 'index.js', defaultExtension: 'js'},
    '@bangular/http': {main: 'index.js', defaultExtension: 'js'},
    '@bangular/upgrade/static': {main: 'index.js', defaultExtension: 'js'},
    '@bangular/upgrade': {main: 'index.js', defaultExtension: 'js'},
    '@bangular/platform-browser/animations/testing': {main: 'index.js', defaultExtension: 'js'},
    '@bangular/platform-browser/animations': {main: 'index.js', defaultExtension: 'js'},
    '@bangular/platform-browser/testing': {main: 'index.js', defaultExtension: 'js'},
    '@bangular/platform-browser': {main: 'index.js', defaultExtension: 'js'},
    '@bangular/platform-browser-dynamic/testing': {main: 'index.js', defaultExtension: 'js'},
    '@bangular/platform-browser-dynamic': {main: 'index.js', defaultExtension: 'js'},
    '@bangular/platform-server/testing': {main: 'index.js', defaultExtension: 'js'},
    '@bangular/platform-server': {main: 'index.js', defaultExtension: 'js'},
    '@bangular/platform-webworker': {main: 'index.js', defaultExtension: 'js'},
    '@bangular/platform-webworker-dynamic': {main: 'index.js', defaultExtension: 'js'},
  }
});


// Set up the test injector, then import all the specs, execute their `main()`
// method and kick off Karma (Jasmine).
System.import('@bangular/core/testing')
    .then(function(coreTesting) {
      return Promise
          .all([
            System.import('@bangular/platform-browser-dynamic/testing'),
            System.import('@bangular/platform-browser/animations')
          ])
          .then(function(mods) {
            coreTesting.TestBed.initTestEnvironment(
                [mods[0].BrowserDynamicTestingModule, mods[1].NoopAnimationsModule],
                mods[0].platformBrowserDynamicTesting());
          });
    })
    .then(function() {
      return Promise.all(Object
                             .keys(window.__karma__.files)  // All files served by Karma.
                             .filter(onlySpecFiles)
                             .map(window.file2moduleName)  // Normalize paths to module names.
                             .map(function(path) {
                               return System.import(path).then(function(module) {
                                 if (module.hasOwnProperty('main')) {
                                   throw new Error('main() in specs are no longer supported');
                                 }
                               });
                             }));
    })
    .then(function() { __karma__.start(); }, function(error) { console.error(error); });


function onlySpecFiles(path) {
  return /_spec\.js$/.test(path);
}
