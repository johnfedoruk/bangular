/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://bangular.io/license
 */
System.config({
  defaultJSExtensions: true,
  map: {
    '@bangular/common': '/vendor/@bangular/common/bundles/common.umd.js',
    '@bangular/compiler': '/vendor/@bangular/compiler/bundles/compiler.umd.js',
    '@bangular/animations': '/vendor/@bangular/animations/bundles/animations.umd.js',
    '@bangular/animations/browser': '/vendor/@bangular/animations/bundles/animations-browser.umd.js',
    '@bangular/platform-browser/animations':
        '/vendor/@bangular/platform-browser/bundles/platform-browser-animations.umd.js',
    '@bangular/core': '/vendor/@bangular/core/bundles/core.umd.js',
    '@bangular/forms': '/vendor/@bangular/forms/bundles/forms.umd.js',
    '@bangular/http': '/vendor/@bangular/forms/bundles/http.umd.js',
    '@bangular/platform-browser':
        '/vendor/@bangular/platform-browser/bundles/platform-browser.umd.js',
    '@bangular/platform-browser-dynamic':
        '/vendor/@bangular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
    '@bangular/router': '/vendor/@bangular/router/bundles/router.umd.js',
    '@bangular/upgrade': '/vendor/@bangular/upgrade/bundles/upgrade.umd.js',
    '@bangular/upgrade/static': '/vendor/@bangular/upgrade/bundles/upgrade-static.umd.js',
    'rxjs': '/vendor/rxjs',
  },
  packages: {
    // rxjs: {format: 'cjs', exports: 'Rx' }
    rxjs: {defaultExtension: 'js'}
  }
});
