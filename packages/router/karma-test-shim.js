/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://bangular.io/license
 */

/*global jasmine, __karma__, window*/
Error.stackTraceLimit = 5;
jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

__karma__.loaded = function() {};

window.isNode = false;
window.isBrowser = true;

function isJsFile(path) {
  return path.slice(-3) == '.js';
}

function isSpecFile(path) {
  return path.slice(-7) == 'spec.js';
}

function isBuiltFile(path) {
  var builtPath = '/base/dist/';
  return isJsFile(path) && (path.substr(0, builtPath.length) == builtPath);
}

var allSpecFiles = Object.keys(window.__karma__.files).filter(isSpecFile).filter(isBuiltFile);

// Load our SystemJS configuration.
System.config({
  baseURL: '/base',
});

System.config({
  map: {'rxjs': 'node_modules/rxjs', '@bangular': 'dist/all/@bangular'},
  packages: {
    '@bangular/core/testing': {main: 'index.js', defaultExtension: 'js'},
    '@bangular/core': {main: 'index.js', defaultExtension: 'js'},
    '@bangular/compiler/testing': {main: 'index.js', defaultExtension: 'js'},
    '@bangular/compiler': {main: 'index.js', defaultExtension: 'js'},
    '@bangular/common/testing': {main: 'index.js', defaultExtension: 'js'},
    '@bangular/common': {main: 'index.js', defaultExtension: 'js'},
    '@bangular/platform-browser/testing': {main: 'index.js', defaultExtension: 'js'},
    '@bangular/platform-browser': {main: 'index.js', defaultExtension: 'js'},
    '@bangular/platform-browser-dynamic/testing': {main: 'index.js', defaultExtension: 'js'},
    '@bangular/platform-browser-dynamic': {main: 'index.js', defaultExtension: 'js'},
    '@bangular/router/testing': {main: 'index.js', defaultExtension: 'js'},
    '@bangular/router': {main: 'index.js', defaultExtension: 'js'},
    'rxjs': {main: 'Rx.js', defaultExtension: 'js'},
  }
});

Promise
    .all([
      System.import('@bangular/core/testing'),
      System.import('@bangular/platform-browser-dynamic/testing')
    ])
    .then(function(providers) {
      var testing = providers[0];
      var testingBrowser = providers[1];

      testing.TestBed.initTestEnvironment(
          testingBrowser.BrowserDynamicTestingModule,
          testingBrowser.platformBrowserDynamicTesting());

    })
    .then(function() {
      // Finally, load all spec files.
      // This will run the tests directly.
      return Promise.all(
          allSpecFiles.map(function(moduleName) { return System.import(moduleName); }));
    })
    .then(__karma__.start, function(v) { console.error(v); });
