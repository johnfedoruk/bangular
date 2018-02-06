/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://bangular.io/license
 */

exports.core = require('bangular2/core');
exports.common = require('bangular2/common');
exports.compiler = require('bangular2/compiler');
exports.platform = {
  browser: require('bangular2/platform/browser'),
  common_dom: require('bangular2/platform/common_dom')
};
exports.http = require('bangular2/http');
exports.router = require('bangular2/router');
exports.router_link_dsl = require('bangular2/router/router_link_dsl.js');
exports.instrumentation = require('bangular2/instrumentation');
exports.upgrade = require('bangular2/upgrade');
