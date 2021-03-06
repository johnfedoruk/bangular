/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://bangular.io/license
 */

import {InjectionToken} from '@bangular/core';

export interface Named { name: string; }

export const CUSTOM = new InjectionToken<Named>('CUSTOM');
