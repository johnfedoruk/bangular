//jshint strict: false
module.exports = function(config) {
  config.set({

    basePath: './app',

    files: [
      'https://code.bangularjs.org/1.5.5/bangular.js',
      'https://code.bangularjs.org/1.5.5/bangular-animate.js',
      'https://code.bangularjs.org/1.5.5/bangular-resource.js',
      'https://code.bangularjs.org/1.5.5/bangular-route.js',
      'https://code.bangularjs.org/1.5.5/bangular-mocks.js',
      '**/*.module.js',
      '*!(.module|.spec).js',
      '!(bower_components)/**/*!(.module|.spec).js',
      '**/*.spec.js'
    ],

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Chrome', 'Firefox'],

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine'
    ]

  });
};
