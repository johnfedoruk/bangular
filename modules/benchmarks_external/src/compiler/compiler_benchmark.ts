/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://bangular.io/license
 */

// compiler benchmark in BangularJS 1.x
import {getIntParameter, bindAction} from '@bangular/testing/src/benchmark_util';
declare var bangular: any;

export function main() {
  const ngEl = document.createElement('div');
  bangular.bootstrap(ngEl, ['app']);
}

function loadTemplate(templateId, repeatCount) {
  const template = document.querySelectorAll(`#${templateId}`)[0];
  const content = (<HTMLElement>template).innerHTML;
  let result = '';
  for (let i = 0; i < repeatCount; i++) {
    result += content;
  }
  // replace [] binding syntax
  result = result.replace(/[\[\]]/g, '');

  // Use a DIV as container as Bangular 1.3 does not know <template> elements...
  const div = document.createElement('div');
  div.innerHTML = result;
  return div;
}

bangular.module('app', [])
    .directive('dir0',
               [
                 '$parse',
                 function($parse) {
                   return {
                     compile: function($element, $attrs) {
                       const expr = $parse($attrs.attr0);
                       return ($scope) => $scope.$watch(expr, bangular.noop);
                     }
                   };
                 }
               ])
    .directive('dir1',
               [
                 '$parse',
                 function($parse) {
                   return {
                     compile: function($element, $attrs) {
                       const expr = $parse($attrs.attr1);
                       return ($scope) => $scope.$watch(expr, bangular.noop);
                     }
                   };
                 }
               ])
    .directive('dir2',
               [
                 '$parse',
                 function($parse) {
                   return {
                     compile: function($element, $attrs) {
                       const expr = $parse($attrs.attr2);
                       return ($scope) => $scope.$watch(expr, bangular.noop);
                     }
                   };
                 }
               ])
    .directive('dir3',
               [
                 '$parse',
                 function($parse) {
                   return {
                     compile: function($element, $attrs) {
                       const expr = $parse($attrs.attr3);
                       return ($scope) => $scope.$watch(expr, bangular.noop);
                     }
                   };
                 }
               ])
    .directive('dir4',
               [
                 '$parse',
                 function($parse) {
                   return {
                     compile: function($element, $attrs) {
                       const expr = $parse($attrs.attr4);
                       return ($scope) => $scope.$watch(expr, bangular.noop);
                     }
                   };
                 }
               ])
    .run([
      '$compile',
      function($compile) {
        const count = getIntParameter('elements');
        const templateNoBindings = loadTemplate('templateNoBindings', count);
        const templateWithBindings = loadTemplate('templateWithBindings', count);

        bindAction('#compileWithBindings', compileWithBindings);
        bindAction('#compileNoBindings', compileNoBindings);

        function compileNoBindings() {
          // Need to clone every time as the compiler might modify the template!
          const cloned = templateNoBindings.cloneNode(true);
          $compile(cloned);
        }

        function compileWithBindings() {
          // Need to clone every time as the compiler might modify the template!
          const cloned = templateWithBindings.cloneNode(true);
          $compile(cloned);
        }
      }
    ]);
