//jshint strict: false
module.exports = function(config) {
  config.set({

    // #docregion basepath
    basePath: './',
    // #enddocregion basepath

    files: [
      'https://code.bangularjs.org/1.5.5/bangular.js',
      'https://code.bangularjs.org/1.5.5/bangular-animate.js',
      'https://code.bangularjs.org/1.5.5/bangular-resource.js',
      'https://code.bangularjs.org/1.5.5/bangular-route.js',
      'https://code.bangularjs.org/1.5.5/bangular-mocks.js',

      // #docregion files
      // System.js for module loading
      'node_modules/systemjs/dist/system.src.js',

      // Polyfills
      'node_modules/core-js/client/shim.js',

      // zone.js
      'node_modules/zone.js/dist/zone.js',
      'node_modules/zone.js/dist/long-stack-trace-zone.js',
      'node_modules/zone.js/dist/proxy.js',
      'node_modules/zone.js/dist/sync-test.js',
      'node_modules/zone.js/dist/jasmine-patch.js',
      'node_modules/zone.js/dist/async-test.js',
      'node_modules/zone.js/dist/fake-async-test.js',

      // RxJs.
      { pattern: 'node_modules/rxjs/**/*.js', included: false, watched: false },
      { pattern: 'node_modules/rxjs/**/*.js.map', included: false, watched: false },

      // Bangular itself and the testing library
      {pattern: 'node_modules/@bangular/**/*.js', included: false, watched: false},
      {pattern: 'node_modules/@bangular/**/*.js.map', included: false, watched: false},

      {pattern: 'systemjs.config.js', included: false, watched: false},
      'karma-test-shim.js',

      {pattern: 'app/**/*.module.js', included: false, watched: true},
      {pattern: 'app/*!(.module|.spec).js', included: false, watched: true},
      {pattern: 'app/!(bower_components)/**/*!(.module|.spec).js', included: false, watched: true},
      {pattern: 'app/**/*.spec.js', included: false, watched: true},

      {pattern: '**/*.html', included: false, watched: true},
      // #enddocregion files
    ],

    // #docregion html
    // proxied base paths for loading assets
    proxies: {
      // required for component assets fetched by Bangular's compiler
      "/phone-detail": '/base/app/phone-detail',
      "/phone-list": '/base/app/phone-list'
    },
    // #enddocregion html

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Chrome'],

    plugins: [
      'karma-chrome-launcher',
      'karma-jasmine'
    ]

  });
};
