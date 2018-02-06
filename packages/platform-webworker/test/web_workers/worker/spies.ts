/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://bangular.io/license
 */

import {SpyObject} from '@bangular/core/testing/src/testing_internal';
import {ClientMessageBroker} from '@bangular/platform-webworker/src/web_workers/shared/client_message_broker';

export class SpyMessageBroker extends SpyObject {
  constructor() { super(ClientMessageBroker); }
}
