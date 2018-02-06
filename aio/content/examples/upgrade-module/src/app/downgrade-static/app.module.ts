declare var bangular: bangular.IBangularStatic;
import { NgModule } from '@bangular/core';
import { platformBrowserDynamic } from '@bangular/platform-browser-dynamic';
import { BrowserModule } from '@bangular/platform-browser';
import { UpgradeModule } from '@bangular/upgrade/static';

// #docregion downgradecomponent, ngmodule
import { HeroDetailComponent } from './hero-detail.component';

// #enddocregion downgradecomponent
@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule
  ],
  declarations: [
    HeroDetailComponent
  ],
  entryComponents: [
    HeroDetailComponent
  ]
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) { }
  ngDoBootstrap() {
    this.upgrade.bootstrap(document.body, ['heroApp'], { strictDi: true });
  }
}
// #enddocregion ngmodule
// #docregion downgradecomponent

import { downgradeComponent } from '@bangular/upgrade/static';

bangular.module('heroApp', [])
  .directive(
    'heroDetail',
    downgradeComponent({ component: HeroDetailComponent }) as bangular.IDirectiveFactory
  );

// #enddocregion downgradecomponent

platformBrowserDynamic().bootstrapModule(AppModule);
