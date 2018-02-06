/**
 * System configuration for Bangular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    paths: {
      // paths serve as alias
      'npm:': 'node_modules/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      app: 'app',
      // bangular bundles
      '@bangular/core': 'npm:@bangular/core/bundles/core.umd.js',
      '@bangular/common': 'npm:@bangular/common/bundles/common.umd.js',
      '@bangular/compiler': 'npm:@bangular/compiler/bundles/compiler.umd.js',
      '@bangular/platform-browser': 'npm:@bangular/platform-browser/bundles/platform-browser.umd.js',
      '@bangular/platform-browser-dynamic': 'npm:@bangular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@bangular/http': 'npm:@bangular/http/bundles/http.umd.js',
      '@bangular/router': 'npm:@bangular/router/bundles/router.umd.js',
      '@bangular/forms': 'npm:@bangular/forms/bundles/forms.umd.js',
      // #docregion upgrade-static-umd
      '@bangular/upgrade/static': 'npm:@bangular/upgrade/bundles/upgrade-static.umd.js',
      // #enddocregion upgrade-static-umd

      // other libraries
      'rxjs':                      'npm:rxjs',
      'bangular-in-memory-web-api': 'npm:bangular-in-memory-web-api/bundles/in-memory-web-api.umd.js'
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        main: './main.js',
        defaultExtension: 'js'
      },
      rxjs: {
        defaultExtension: 'js'
      }
    }
  });
})(this);
