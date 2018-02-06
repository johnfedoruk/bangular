/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://bangular.io/license
 */

import {$, ExpectedConditions, browser, by, element} from 'protractor';
import {verifyNoBrowserErrors} from '../../../../_common/e2e_util';

function waitForElement(selector: string) {
  const EC = ExpectedConditions;
  // Waits for the element with id 'abc' to be present on the dom.
  browser.wait(EC.presenceOf($(selector)), 20000);
}

describe('ngTemplateOutlet', () => {
  const URL = 'common/ngTemplateOutlet/ts/';
  afterEach(verifyNoBrowserErrors);

  describe('ng-template-outlet-example', () => {
    it('should render', () => {
      browser.get(URL);
      waitForElement('ng-template-outlet-example');
      expect(element.all(by.css('ng-template-outlet-example span')).getText()).toEqual([
        'Hello', 'Hello World!', 'Ahoj Svet!'
      ]);
    });
  });
});
