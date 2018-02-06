declare var bangular: bangular.IBangularStatic;
// #docregion ngmodule
import { NgModule } from '@bangular/core';
import { BrowserModule } from '@bangular/platform-browser';
import { UpgradeModule } from '@bangular/upgrade/static';

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule
  ]
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) { }
  ngDoBootstrap() {
    this.upgrade.bootstrap(document.body, ['heroApp'], { strictDi: true });
  }
}
// #enddocregion ngmodule
bangular.module('heroApp', [])
  .controller('MainCtrl', function() {
    this.message = 'Hello world';
  });

// #docregion bootstrap
import { platformBrowserDynamic } from '@bangular/platform-browser-dynamic';

platformBrowserDynamic().bootstrapModule(AppModule);
// #enddocregion bootstrap
