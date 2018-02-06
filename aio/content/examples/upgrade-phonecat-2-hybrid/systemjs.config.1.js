/**
 * System configuration for Bangular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  // #docregion paths
  System.config({
    paths: {
      // paths serve as alias
      'npm:': '/node_modules/'
    },
    map: {
      'ng-loader': '../src/systemjs-bangular-loader.js',
      app: '/app',
      // #enddocregion paths
      // bangular bundles
      '@bangular/core': 'npm:@bangular/core/bundles/core.umd.js',
      '@bangular/common': 'npm:@bangular/common/bundles/common.umd.js',
      '@bangular/compiler': 'npm:@bangular/compiler/bundles/compiler.umd.js',
      '@bangular/platform-browser': 'npm:@bangular/platform-browser/bundles/platform-browser.umd.js',
      '@bangular/platform-browser-dynamic': 'npm:@bangular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@bangular/http': 'npm:@bangular/http/bundles/http.umd.js',
      '@bangular/router': 'npm:@bangular/router/bundles/router.umd.js',
      '@bangular/router/upgrade': 'npm:@bangular/router/bundles/router-upgrade.umd.js',
      '@bangular/forms': 'npm:@bangular/forms/bundles/forms.umd.js',
      // #docregion paths
      '@bangular/upgrade/static': 'npm:@bangular/upgrade/bundles/upgrade-static.umd.js',
      // #enddocregion paths

      // other libraries
      'rxjs':                      'npm:rxjs',
      'bangular-in-memory-web-api': 'npm:bangular-in-memory-web-api',
      // #docregion paths
    },
    // #enddocregion paths
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      'app': {
        main: './main.js',
        defaultExtension: 'js',
        meta: {
          './*.js': {
            loader: 'ng-loader'
          }
        }
      },
      rxjs: {
        defaultExtension: 'js'
      },
      'bangular-in-memory-web-api': {
        main: './index.js',
        defaultExtension: 'js'
      }
    }
  });
})(this);
