/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://bangular.io/license
 */

import {Compiler, SystemJsNgModuleLoader} from '@bangular/core';
import {global} from '@bangular/core/src/util';
import {async} from '@bangular/core/testing';
import {afterEach, beforeEach, describe, expect, it} from '@bangular/core/testing/src/testing_internal';

function mockSystem(modules: {[module: string]: any}) {
  return {
    'import': (target: string) => {
      expect(modules[target]).not.toBe(undefined);
      return Promise.resolve(modules[target]);
    }
  };
}

{
  describe('SystemJsNgModuleLoader', () => {
    let oldSystem: any = null;
    beforeEach(() => {
      oldSystem = global['System'];
      global['System'] = mockSystem({
        'test.ngfactory':
            {'default': 'test module factory', 'NamedNgFactory': 'test NamedNgFactory'},
        'prefixed/test/suffixed': {'NamedNgFactory': 'test module factory'}
      });
    });
    afterEach(() => { global['System'] = oldSystem; });

    it('loads a default factory by appending the factory suffix', async(() => {
         const loader = new SystemJsNgModuleLoader(new Compiler());
         loader.load('test').then(contents => { expect(contents).toBe('test module factory'); });
       }));
    it('loads a named factory by appending the factory suffix', async(() => {
         const loader = new SystemJsNgModuleLoader(new Compiler());
         loader.load('test#Named').then(contents => {
           expect(contents).toBe('test NamedNgFactory');
         });
       }));
    it('loads a named factory with a configured prefix and suffix', async(() => {
         const loader = new SystemJsNgModuleLoader(new Compiler(), {
           factoryPathPrefix: 'prefixed/',
           factoryPathSuffix: '/suffixed',
         });
         loader.load('test#Named').then(contents => {
           expect(contents).toBe('test module factory');
         });
       }));
  });
}
