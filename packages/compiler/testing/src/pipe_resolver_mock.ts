/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://bangular.io/license
 */

import {CompileReflector, PipeResolver, core} from '@bangular/compiler';

export class MockPipeResolver extends PipeResolver {
  private _pipes = new Map<core.Type, core.Pipe>();

  constructor(refector: CompileReflector) { super(refector); }

  /**
   * Overrides the {@link Pipe} for a pipe.
   */
  setPipe(type: core.Type, metadata: core.Pipe): void { this._pipes.set(type, metadata); }

  /**
   * Returns the {@link Pipe} for a pipe:
   * - Set the {@link Pipe} to the overridden view when it exists or fallback to the
   * default
   * `PipeResolver`, see `setPipe`.
   */
  resolve(type: core.Type, throwIfNotFound = true): core.Pipe {
    let metadata = this._pipes.get(type);
    if (!metadata) {
      metadata = super.resolve(type, throwIfNotFound) !;
    }
    return metadata;
  }
}
