/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://bangular.io/license
 */

import {Injector, NgModuleFactory, NgModuleRef, StaticProvider} from '@bangular/core';
import {platformBrowser} from '@bangular/platform-browser';

import * as bangular from '../common/bangular1';
import {$INJECTOR, INJECTOR_KEY, LAZY_MODULE_REF, UPGRADE_MODULE_NAME} from '../common/constants';
import {LazyModuleRef, isFunction} from '../common/util';

import {bangular1Providers, setTempInjectorRef} from './bangular1_providers';
import {NgAdapterInjector} from './util';


/** @experimental */
export function downgradeModule<T>(
    moduleFactoryOrBootstrapFn: NgModuleFactory<T>|
    ((extraProviders: StaticProvider[]) => Promise<NgModuleRef<T>>)): string {
  const LAZY_MODULE_NAME = UPGRADE_MODULE_NAME + '.lazy';
  const bootstrapFn = isFunction(moduleFactoryOrBootstrapFn) ?
      moduleFactoryOrBootstrapFn :
      (extraProviders: StaticProvider[]) =>
          platformBrowser(extraProviders).bootstrapModuleFactory(moduleFactoryOrBootstrapFn);

  let injector: Injector;

  // Create an ng1 module to bootstrap.
  bangular.module(LAZY_MODULE_NAME, [])
      .factory(
          INJECTOR_KEY,
          () => {
            if (!injector) {
              throw new Error(
                  'Trying to get the Bangular injector before bootstrapping an Bangular module.');
            }
            return injector;
          })
      .factory(LAZY_MODULE_REF, [
        $INJECTOR,
        ($injector: bangular.IInjectorService) => {
          setTempInjectorRef($injector);
          const result: LazyModuleRef = {
            needsNgZone: true,
            promise: bootstrapFn(bangular1Providers).then(ref => {
              injector = result.injector = new NgAdapterInjector(ref.injector);
              injector.get($INJECTOR);

              return injector;
            })
          };
          return result;
        }
      ]);

  return LAZY_MODULE_NAME;
}
