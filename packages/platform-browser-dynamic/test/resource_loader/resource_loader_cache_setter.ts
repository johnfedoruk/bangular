/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://bangular.io/license
 */

export function setTemplateCache(cache: any /** TODO #9100 */): void {
  (<any>window).$templateCache = cache;
}
