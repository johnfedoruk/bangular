/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://bangular.io/license
 */

import {runClickBenchmark, verifyNoBrowserErrors} from '@bangular/testing/src/perf_util';

describe('ng1.x tree benchmark', function() {

  const URL = 'benchmarks_external/src/static_tree/tree_benchmark.html';

  afterEach(verifyNoBrowserErrors);

  it('should log the stats (create)', function(done) {
    runClickBenchmark({
      url: URL,
      buttons: ['#destroyDom', '#createDom'],
      id: 'ng1.static.tree.create',
      params: [],
      waitForBangular2: false
    }).then(done, done.fail);
  });

  it('should log the stats (update)', function(done) {
    runClickBenchmark({
      url: URL,
      buttons: ['#createDom'],
      id: 'ng1.static.tree.update',
      params: [],
      waitForBangular2: false
    }).then(done, done.fail);
  });

});
