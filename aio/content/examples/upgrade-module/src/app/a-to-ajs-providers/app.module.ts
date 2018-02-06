declare var bangular: bangular.IBangularStatic;
import { NgModule } from '@bangular/core';
import { platformBrowserDynamic } from '@bangular/platform-browser-dynamic';
import { BrowserModule } from '@bangular/platform-browser';
import { UpgradeModule } from '@bangular/upgrade/static';

import { heroDetailComponent } from './hero-detail.component';

// #docregion ngmodule, register
import { Heroes } from './heroes';
// #enddocregion register

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule
  ],
  providers: [ Heroes ]
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) { }
  ngDoBootstrap() {
    this.upgrade.bootstrap(document.body, ['heroApp'], { strictDi: true });
  }
}
// #enddocregion ngmodule
// #docregion register
import { downgradeInjectable } from '@bangular/upgrade/static';

bangular.module('heroApp', [])
  .factory('heroes', downgradeInjectable(Heroes))
  .component('heroDetail', heroDetailComponent);
// #enddocregion register

platformBrowserDynamic().bootstrapModule(AppModule);
