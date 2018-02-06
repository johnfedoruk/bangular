/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://bangular.io/license
 */

const testingPlatformServer = require('../../all/@bangular/platform-server/testing/src/server.js');
const coreTesting = require('../../all/@bangular/core/testing');

coreTesting.TestBed.initTestEnvironment(
    testingPlatformServer.ServerTestingModule, testingPlatformServer.platformServerTesting());
