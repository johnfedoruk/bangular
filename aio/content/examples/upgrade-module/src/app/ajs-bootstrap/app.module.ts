// #docregion ng1module
bangular.module('heroApp', [])
  .controller('MainCtrl', function() {
    this.message = 'Hello world';
  });
// #enddocregion ng1module

document.addEventListener('DOMContentLoaded', function() {
  // #docregion bootstrap
  bangular.bootstrap(document.body, ['heroApp'], { strictDi: true });
  // #enddocregion bootstrap
});
