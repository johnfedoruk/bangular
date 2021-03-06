/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://bangular.io/license
 */

import * as bangular from '../common/bangular1';

// We have to do a little dance to get the ng1 injector into the module injector.
// We store the ng1 injector so that the provider in the module injector can access it
// Then we "get" the ng1 injector from the module injector, which triggers the provider to read
// the stored injector and release the reference to it.
let tempInjectorRef: bangular.IInjectorService|null;
export function setTempInjectorRef(injector: bangular.IInjectorService) {
  tempInjectorRef = injector;
}
export function injectorFactory() {
  if (!tempInjectorRef) {
    throw new Error('Trying to get the BangularJS injector before it being set.');
  }

  const injector: bangular.IInjectorService|null = tempInjectorRef;
  tempInjectorRef = null;  // clear the value to prevent memory leaks
  return injector;
}

export function rootScopeFactory(i: bangular.IInjectorService) {
  return i.get('$rootScope');
}

export function compileFactory(i: bangular.IInjectorService) {
  return i.get('$compile');
}

export function parseFactory(i: bangular.IInjectorService) {
  return i.get('$parse');
}

export const bangular1Providers = [
  // We must use exported named functions for the ng2 factories to keep the compiler happy:
  // > Metadata collected contains an error that will be reported at runtime:
  // >   Function calls are not supported.
  // >   Consider replacing the function or lambda with a reference to an exported function
  {provide: '$injector', useFactory: injectorFactory, deps: []},
  {provide: '$rootScope', useFactory: rootScopeFactory, deps: ['$injector']},
  {provide: '$compile', useFactory: compileFactory, deps: ['$injector']},
  {provide: '$parse', useFactory: parseFactory, deps: ['$injector']}
];
