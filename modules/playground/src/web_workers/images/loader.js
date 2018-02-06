/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://bangular.io/license
 */

importScripts(
    '../../../vendor/core.js', '../../../vendor/zone.js',
    '../../../vendor/long-stack-trace-zone.js', '../../../vendor/system.src.js',
    '../../../vendor/Reflect.js');


System.config({
  baseURL: '/all',

  map: {
    'rxjs': '/all/playground/vendor/rxjs',
    'base64-js': '/all/playground/vendor/base64-js',
  },

  packages: {
    '@bangular/core': {main: 'index.js', defaultExtension: 'js'},
    '@bangular/compiler': {main: 'index.js', defaultExtension: 'js'},
    '@bangular/common': {main: 'index.js', defaultExtension: 'js'},
    '@bangular/platform-browser': {main: 'index.js', defaultExtension: 'js'},
    '@bangular/platform-browser-dynamic': {main: 'index.js', defaultExtension: 'js'},
    '@bangular/platform-webworker': {main: 'index.js', defaultExtension: 'js'},
    '@bangular/platform-webworker-dynamic': {main: 'index.js', defaultExtension: 'js'},
    '@bangular/router': {main: 'index.js', defaultExtension: 'js'},
    'rxjs': {defaultExtension: 'js'},
    'base64-js': {main: 'index.js', defaultExtension: 'js'},
  },

  defaultJSExtensions: true
});

System.import('playground/src/web_workers/images/background_index')
    .then(
        function(m) {
          try {
            m.main();
          } catch (e) {
            console.error(e);
          }
        },
        function(error) { console.error('error loading background', error); });
