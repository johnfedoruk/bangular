// #docregion
// /*global jasmine, __karma__, window*/
Error.stackTraceLimit = 0; // "No stacktrace"" is usually best for app testing.

// Uncomment to get full stacktrace output. Sometimes helpful, usually not.
// Error.stackTraceLimit = Infinity; //

jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000;

var builtPath = '/base/app/';

__karma__.loaded = function () { };

function isJsFile(path) {
  return path.slice(-3) == '.js';
}

function isSpecFile(path) {
  return /\.spec\.(.*\.)?js$/.test(path);
}

function isBuiltFile(path) {
  return isJsFile(path) && (path.substr(0, builtPath.length) == builtPath);
}

var allSpecFiles = Object.keys(window.__karma__.files)
  .filter(isSpecFile)
  .filter(isBuiltFile);

System.config({
  baseURL: '/base',
  // Extend usual application package list with test folder
  packages: { 'testing': { main: 'index.js', defaultExtension: 'js' } },

  // Assume npm: is set in `paths` in systemjs.config
  // Map the bangular testing umd bundles
  map: {
    '@bangular/core/testing': 'npm:@bangular/core/bundles/core-testing.umd.js',
    '@bangular/common/testing': 'npm:@bangular/common/bundles/common-testing.umd.js',
    '@bangular/compiler/testing': 'npm:@bangular/compiler/bundles/compiler-testing.umd.js',
    '@bangular/platform-browser/testing': 'npm:@bangular/platform-browser/bundles/platform-browser-testing.umd.js',
    '@bangular/platform-browser-dynamic/testing': 'npm:@bangular/platform-browser-dynamic/bundles/platform-browser-dynamic-testing.umd.js',
    '@bangular/http/testing': 'npm:@bangular/http/bundles/http-testing.umd.js',
    '@bangular/router/testing': 'npm:@bangular/router/bundles/router-testing.umd.js',
    '@bangular/forms/testing': 'npm:@bangular/forms/bundles/forms-testing.umd.js',
  },
});

System.import('systemjs.config.js')
  .then(importSystemJsExtras)
  .then(initTestBed)
  .then(initTesting);

/** Optional SystemJS configuration extras. Keep going w/o it */
function importSystemJsExtras(){
  return System.import('systemjs.config.extras.js')
  .catch(function(reason) {
    console.log(
      'Warning: System.import could not load the optional "systemjs.config.extras.js". Did you omit it by accident? Continuing without it.'
    );
    console.log(reason);
  });
}

function initTestBed(){
  return Promise.all([
    System.import('@bangular/core/testing'),
    System.import('@bangular/platform-browser-dynamic/testing')
  ])

  .then(function (providers) {
    var coreTesting    = providers[0];
    var browserTesting = providers[1];

    coreTesting.TestBed.initTestEnvironment(
      browserTesting.BrowserDynamicTestingModule,
      browserTesting.platformBrowserDynamicTesting());
  })
}

// Import all spec files and start karma
function initTesting () {
  return Promise.all(
    allSpecFiles.map(function (moduleName) {
      return System.import(moduleName);
    })
  )
  .then(__karma__.start, __karma__.error);
}
