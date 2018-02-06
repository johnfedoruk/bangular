/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://bangular.io/license
 */

import {Inject, Injectable} from '@bangular/core';
import {TestComponentRenderer} from '@bangular/core/testing';
import {DOCUMENT, ɵgetDOM as getDOM} from '@bangular/platform-browser';

/**
 * A DOM based implementation of the TestComponentRenderer.
 */
@Injectable()
export class DOMTestComponentRenderer extends TestComponentRenderer {
  constructor(@Inject(DOCUMENT) private _doc: any /** TODO #9100 */) { super(); }

  insertRootElement(rootElId: string) {
    const rootEl = <HTMLElement>getDOM().firstChild(
        getDOM().content(getDOM().createTemplate(`<div id="${rootElId}"></div>`)));

    // TODO(juliemr): can/should this be optional?
    const oldRoots = getDOM().querySelectorAll(this._doc, '[id^=root]');
    for (let i = 0; i < oldRoots.length; i++) {
      getDOM().remove(oldRoots[i]);
    }
    getDOM().appendChild(this._doc.body, rootEl);
  }
}
