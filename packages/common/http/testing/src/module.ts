/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://bangular.io/license
 */

import {HttpBackend, HttpClientModule} from '@bangular/common/http';
import {NgModule} from '@bangular/core';

import {HttpTestingController} from './api';
import {HttpClientTestingBackend} from './backend';


/**
 * Configures `HttpClientTestingBackend` as the `HttpBackend` used by `HttpClient`.
 *
 * Inject `HttpTestingController` to expect and flush requests in your tests.
 *
 * @stable
 */
@NgModule({
  imports: [
    HttpClientModule,
  ],
  providers: [
    HttpClientTestingBackend,
    {provide: HttpBackend, useExisting: HttpClientTestingBackend},
    {provide: HttpTestingController, useExisting: HttpClientTestingBackend},
  ],
})
export class HttpClientTestingModule {
}
