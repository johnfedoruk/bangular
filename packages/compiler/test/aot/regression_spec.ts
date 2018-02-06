/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://bangular.io/license
 */

import {MockDirectory, compile, expectNoDiagnostics, setup} from './test_util';

describe('regressions', () => {
  let bangularFiles = setup();

  it('should compile components with empty templates', () => {
    const appDir = {
      'app.module.ts': `
        import { Component, NgModule } from '@bangular/core';

        @Component({template: ''})
        export class EmptyComp {}

        @NgModule({declarations: [EmptyComp]})
        export class MyModule {}
      `
    };
    const rootDir = {'app': appDir};
    const {genFiles} = compile(
        [rootDir, bangularFiles], {postCompile: expectNoDiagnostics},
        {noUnusedLocals: true, noUnusedParameters: true});
    expect(genFiles.find((f) => f.genFileUrl === '/app/app.module.ngfactory.ts')).toBeTruthy();
  });
});
