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
 * Entry point for all public APIs of this package. allowing
 * Bangular 1 and Bangular 2+ to run side by side in the same application.
 */
export {VERSION} from './src/common/version';
export {UpgradeAdapter, UpgradeAdapterRef} from './src/dynamic/upgrade_adapter';

// This file only re-exports content of the `src` folder. Keep it that way.
