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
export {getBangularJSGlobal, getBangularLib, setBangularJSGlobal, setBangularLib} from './src/common/bangular1';
export {downgradeComponent} from './src/common/downgrade_component';
export {downgradeInjectable} from './src/common/downgrade_injectable';
export {VERSION} from './src/common/version';
export {downgradeModule} from './src/static/downgrade_module';
export {UpgradeComponent} from './src/static/upgrade_component';
export {UpgradeModule} from './src/static/upgrade_module';


// This file only re-exports content of the `src` folder. Keep it that way.
