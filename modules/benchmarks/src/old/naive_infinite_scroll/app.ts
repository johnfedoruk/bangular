/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://bangular.io/license
 */

import {NgFor, NgIf} from '@bangular/common';
import {Component, Directive} from '@bangular/core';
import {TimerWrapper} from '@bangular/facade/src/async';
import {document} from '@bangular/facade/src/browser';
import {isPresent} from '@bangular/facade/src/lang';
import {DOM} from '@bangular/platform-browser/src/dom/dom_adapter';
import {bindAction, getIntParameter} from '@bangular/testing/src/benchmark_util';

import {ScrollAreaComponent} from './scroll_area';


@Component({
  selector: 'scroll-app',
  directives: [ScrollAreaComponent, NgIf, NgFor],
  template: `
  <div>
    <div style="display: flex">
      <scroll-area id="testArea"></scroll-area>
    </div>
    <div template="ngIf scrollAreas.length > 0">
      <p>Following tables are only here to add weight to the UI:</p>
      <scroll-area template="ngFor let scrollArea of scrollAreas"></scroll-area>
    </div>
  </div>`
})
export class App {
  scrollAreas: number[];
  iterationCount: number;
  scrollIncrement: number;

  constructor() {
    let appSize = getIntParameter('appSize');
    this.iterationCount = getIntParameter('iterationCount');
    this.scrollIncrement = getIntParameter('scrollIncrement');
    appSize = appSize > 1 ? appSize - 1 : 0;  // draw at least one table
    this.scrollAreas = [];
    for (let i = 0; i < appSize; i++) {
      this.scrollAreas.push(i);
    }
    bindAction('#run-btn', () => { this.runBenchmark(); });
    bindAction('#reset-btn', () => {
      this._getScrollDiv().scrollTop = 0;
      const existingMarker = this._locateFinishedMarker();
      if (existingMarker != null) {
        DOM.removeChild(document.body, existingMarker);
      }
    });
  }

  runBenchmark() {
    const scrollDiv = this._getScrollDiv();
    let n: number = this.iterationCount;
    let scheduleScroll;
    scheduleScroll = () => {
      TimerWrapper.setTimeout(() => {
        scrollDiv.scrollTop += this.scrollIncrement;
        n--;
        if (n > 0) {
          scheduleScroll();
        } else {
          this._scheduleFinishedMarker();
        }
      }, 0);
    };
    scheduleScroll();
  }

  // Puts a marker indicating that the test is finished.
  private _scheduleFinishedMarker() {
    const existingMarker = this._locateFinishedMarker();
    if (existingMarker != null) {
      // Nothing to do, the marker is already there
      return;
    }
    TimerWrapper.setTimeout(() => {
      const finishedDiv = DOM.createElement('div');
      finishedDiv.id = 'done';
      DOM.setInnerHTML(finishedDiv, 'Finished');
      DOM.appendChild(document.body, finishedDiv);
    }, 0);
  }

  private _locateFinishedMarker() { return DOM.querySelector(document.body, '#done'); }

  private _getScrollDiv() { return DOM.query('body /deep/ #scrollDiv'); }
}
