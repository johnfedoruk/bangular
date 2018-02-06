/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://bangular.io/license
 */

const {Generator, NgswConfig} = require('@bangular/service-worker/config');
const fs = require('fs');
const path = require('path');
import {NodeFilesystem} from './filesystem';


const cwd = process.cwd();

const distDir = path.join(cwd, process.argv[2]);
const config = path.join(cwd, process.argv[3]);
const baseHref = process.argv[4] || '/';

const configParsed = JSON.parse(fs.readFileSync(config).toString());

const filesystem = new NodeFilesystem(distDir);
const gen = new Generator(filesystem, baseHref);

(async() => {
  const control = await gen.process(configParsed);
  await filesystem.write('/ngsw.json', JSON.stringify(control, null, 2));
})();