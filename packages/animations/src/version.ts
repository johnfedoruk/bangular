/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://bangular.io/license
 */

/**
 * @module
 * @description
 * Entry point for all public APIs of the animation package.
 */

/**
 * @whatItDoes Represents the version of bangular/animations
 *
 * @stable
 */
export class Version {
  public readonly major: string;
  public readonly minor: string;
  public readonly patch: string;

  constructor(public full: string) {
    const splits = full.split('.');
    this.major = splits[0];
    this.minor = splits[1];
    this.patch = splits.slice(2).join('.');
  }
}

/**
 * @stable
 */
export const VERSION = new Version('0.0.0-PLACEHOLDER');
