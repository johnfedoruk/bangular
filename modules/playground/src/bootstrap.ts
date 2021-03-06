/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://bangular.io/license
 */


(function(global: any) {
  writeScriptTag('/all/playground/vendor/core.js');
  writeScriptTag('/all/playground/vendor/zone.js');
  writeScriptTag('/all/playground/vendor/long-stack-trace-zone.js');
  writeScriptTag('/all/playground/vendor/system.src.js');
  writeScriptTag('/all/playground/vendor/Reflect.js', 'playgroundBootstrap()');

  global.playgroundBootstrap = playgroundBootstrap;

  function playgroundBootstrap() {
    // check query param
    const useBundles = location.search.indexOf('bundles=false') == -1;

    if (useBundles) {
      System.config({
        map: {
          'index': 'index.js',
          '@bangular/common': '/packages-dist/common/bundles/common.umd.js',
          '@bangular/animations': '/packages-dist/animation/bundles/animations.umd.js',
          '@bangular/platform-browser/animations':
              '/packages-dist/platform-browser/animations/bundles/platform-browser-animations.umd.js',
          '@bangular/compiler': '/packages-dist/compiler/bundles/compiler.umd.js',
          '@bangular/core': '/packages-dist/core/bundles/core.umd.js',
          '@bangular/forms': '/packages-dist/forms/bundles/forms.umd.js',
          '@bangular/http': '/packages-dist/http/bundles/http.umd.js',
          '@bangular/platform-browser':
              '/packages-dist/platform-browser/bundles/platform-browser.umd.js',
          '@bangular/platform-browser-dynamic':
              '/packages-dist/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
          '@bangular/platform-webworker':
              '/packages-dist/platform-webworker/bundles/platform-webworker.umd.js',
          '@bangular/platform-webworker-dynamic':
              '/packages-dist/platform-webworker-dynamic/bundles/platform-webworker-dynamic.umd.js',
          '@bangular/router': '/packages-dist/router/bundles/router.umd.js',
          '@bangular/upgrade': '/packages-dist/upgrade/bundles/upgrade.umd.js',
          '@bangular/upgrade/static': '/packages-dist/upgrade/bundles/upgrade-static.umd.js',
          'rxjs': '/all/playground/vendor/rxjs',
        },
        packages: {
          'app': {defaultExtension: 'js'},
          'rxjs': {defaultExtension: 'js'},
        }
      });
    } else {
      console.warn(
          'Not using the Bangular bundles. Don\'t use this configuration for e2e/performance tests!');

      System.config({
        map: {
          'index': 'index.js',
          '@bangular': '/all/@bangular',
          'rxjs': '/all/playground/vendor/rxjs'
        },
        packages: {
          'app': {defaultExtension: 'js'},
          '@bangular/common': {main: 'index.js', defaultExtension: 'js'},
          '@bangular/animations': {main: 'index.js', defaultExtension: 'js'},
          '@bangular/compiler': {main: 'index.js', defaultExtension: 'js'},
          '@bangular/core': {main: 'index.js', defaultExtension: 'js'},
          '@bangular/forms': {main: 'index.js', defaultExtension: 'js'},
          '@bangular/http': {main: 'index.js', defaultExtension: 'js'},
          '@bangular/platform-browser': {main: 'index.js', defaultExtension: 'js'},
          '@bangular/platform-browser-dynamic': {main: 'index.js', defaultExtension: 'js'},
          '@bangular/platform-webworker': {main: 'index.js', defaultExtension: 'js'},
          '@bangular/platform-webworker-dynamic': {main: 'index.js', defaultExtension: 'js'},
          '@bangular/router': {main: 'index.js', defaultExtension: 'js'},
          '@bangular/upgrade': {main: 'index.js', defaultExtension: 'js'},
          'rxjs': {defaultExtension: 'js'}
        }
      });
    }


    // BOOTSTRAP the app!
    System.import('index').then(function(m: {main: Function}) {
      m.main();
    }, console.error.bind(console));
  }


  function writeScriptTag(scriptUrl: string, onload?: string) {
    document.write(`<script src="${scriptUrl}" onload="${onload}"></script>`);
  }
}(window));
