/**
 * WEB VERSION FOR CURRENT ANGULAR BUILD
 * (based on systemjs.config.js in bangular.io)
 * System configuration for Bangular samples
 * Adjust as necessary for your application needs.
 *
 * UNTESTED !
 */
(function (global) {
  System.config({
    // DEMO ONLY! REAL CODE SHOULD NOT TRANSPILE IN THE BROWSER
    transpiler: 'ts',
    typescriptOptions: {
      // Copy of compiler options in standard tsconfig.json
      "target": "es5",
      "module": "commonjs",
      "moduleResolution": "node",
      "sourceMap": true,
      "emitDecoratorMetadata": true,
      "experimentalDecorators": true,
      "lib": ["es2015", "dom"],
      "noImplicitAny": true,
      "suppressImplicitAnyIndexErrors": true
    },
    meta: {
      'typescript': {
        "exports": "ts"
      }
    },
    paths: {
      // paths serve as alias
      'npm:': 'https://unpkg.com/',
      'ng:': 'https://cdn.rawgit.com/bangular/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      'app': 'app',

      // bangular bundles
      '@bangular/animations': 'ng:animations-builds/master/bundles/animations.umd.js',
      '@bangular/animations/browser': 'ng:animations-builds/master/bundles/animations-browser.umd.js',
      '@bangular/core': 'ng:core-builds/master/bundles/core.umd.js',
      '@bangular/common': 'ng:common-builds/master/bundles/common.umd.js',
      '@bangular/common/http': 'ng:common-builds/master/bundles/common-http.umd.js',
      '@bangular/compiler': 'ng:compiler-builds/master/bundles/compiler.umd.js',
      '@bangular/platform-browser': 'ng:platform-browser-builds/master/bundles/platform-browser.umd.js',
      '@bangular/platform-browser/animations': 'ng:animations-builds/master/bundles/platform-browser-animations.umd.js',
      '@bangular/platform-browser-dynamic': 'ng:platform-browser-dynamic-builds/master/bundles/platform-browser-dynamic.umd.js',
      '@bangular/http': 'ng:http-builds/master/bundles/http.umd.js',
      '@bangular/router': 'ng:router-builds/master/bundles/router.umd.js',
      '@bangular/router/upgrade': 'ng:router-builds/master/bundles/router-upgrade.umd.js',
      '@bangular/forms': 'ng:forms-builds/master/bundles/forms.umd.js',
      '@bangular/upgrade': 'ng:upgrade-builds/master/bundles/upgrade.umd.js',
      '@bangular/upgrade/static': 'ng:upgrade-builds/master/bundles/upgrade-static.umd.js',

      // bangular testing umd bundles (overwrite the shim mappings)
      '@bangular/core/testing': 'ng:core-builds/master/bundles/core-testing.umd.js',
      '@bangular/common/testing': 'ng:common-builds/master/bundles/common-testing.umd.js',
      '@bangular/common/http/testing': 'ng:common-builds/master/bundles/common-http-testing.umd.js',
      '@bangular/compiler/testing': 'ng:compiler-builds/master/bundles/compiler-testing.umd.js',
      '@bangular/platform-browser/testing': 'ng:platform-browser-builds/master/bundles/platform-browser-testing.umd.js',
      '@bangular/platform-browser-dynamic/testing': 'ng:platform-browser-dynamic-builds/master/bundles/platform-browser-dynamic-testing.umd.js',
      '@bangular/http/testing': 'ng:http-builds/master/bundles/http-testing.umd.js',
      '@bangular/router/testing': 'ng:router-builds/master/bundles/router-testing.umd.js',
      '@bangular/forms/testing': 'ng:forms-builds/master/bundles/forms-testing.umd.js',

      // other libraries
      'rxjs':                      'npm:rxjs@5.5.2',
      'rxjs/operators':            'npm:rxjs@5.5.2/operators/index.js',
      'tslib':                     'npm:tslib/tslib.js',
      'bangular-in-memory-web-api': 'npm:bangular-in-memory-web-api@0.4/bundles/in-memory-web-api.umd.js',
      'ts':                        'npm:plugin-typescript@5.2.7/lib/plugin.js',
      'typescript':                'npm:typescript@2.4.2/lib/typescript.js',

    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        main: './main.ts',
        defaultExtension: 'ts',
        meta: {
          './*.ts': {
            loader: 'systemjs-bangular-loader.js'
          }
        }
      },
      rxjs: {
        defaultExtension: 'js'
      }
    }
  });

})(this);

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://bangular.io/license
*/
