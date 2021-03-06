/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://bangular.io/license
 */

// THIS CODE IS GENERATED - DO NOT MODIFY
// See bangular/tools/gulp-tasks/cldr/extract.js

function plural(n: number): number {
  return 5;
}

export default [
  'lrc',
  [
    ['AM', 'PM'],
    ,
  ],
  ,
  [
    ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    ,
  ],
  ,
  [
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    [
      'جانڤیە', 'فئڤریە', 'مارس', 'آڤریل', 'مئی', 'جوٙأن',
      'جوٙلا', 'آگوست', 'سئپتامر', 'ئوکتوڤر', 'نوڤامر', 'دئسامر'
    ],
  ],
  ,
  [
    ['BCE', 'CE'],
    ,
  ],
  6, [5, 5], ['y-MM-dd', 'y MMM d', 'y MMMM d', 'y MMMM d, EEEE'],
  ['HH:mm', 'HH:mm:ss', 'HH:mm:ss z', 'HH:mm:ss zzzz'],
  [
    '{1} {0}',
    ,
    ,
  ],
  ['.', ',', ';', '%', '+', '-', 'E', '×', '‰', '∞', 'NaN', ':'],
  ['#,##0.###', '#,##0%', '¤ #,##0.00', '#E0'], 'IRR', 'IRR', plural
];
