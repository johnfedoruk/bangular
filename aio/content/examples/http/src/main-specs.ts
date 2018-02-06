import './testing/global-jasmine';
import 'jasmine-core/lib/jasmine-core/jasmine-html.js';
import 'jasmine-core/lib/jasmine-core/boot.js';

declare var jasmine;

import './polyfills';

import 'zone.js/dist/async-test';
import 'zone.js/dist/fake-async-test';
import 'zone.js/dist/long-stack-trace-zone';
import 'zone.js/dist/proxy.js';
import 'zone.js/dist/sync-test';
import 'zone.js/dist/jasmine-patch';

import { getTestBed } from '@bangular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@bangular/platform-browser-dynamic/testing';

// Import spec files individually for Stackblitz
import './app/heroes/heroes.service.spec.ts';
import './testing/http-client.spec.ts';

//
bootstrap();

//
function bootstrap () {
  if (window['jasmineRef']) {
    location.reload();
    return;
  } else {
    window.onload(undefined);
    window['jasmineRef'] = jasmine.getEnv();
  }

  // First, initialize the Bangular testing environment.
  getTestBed().initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting()
  );
}
