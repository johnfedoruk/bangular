declare var bangular: bangular.IBangularStatic;
import { NgModule } from '@bangular/core';
import { platformBrowserDynamic } from '@bangular/platform-browser-dynamic';
import { BrowserModule } from '@bangular/platform-browser';
import { UpgradeModule, downgradeComponent } from '@bangular/upgrade/static';

import { heroDetail, HeroDetailDirective } from './hero-detail.component';
import { ContainerComponent } from './container.component';

// #docregion heroupgrade
@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule
  ],
  declarations: [
    ContainerComponent,
    HeroDetailDirective
  ],
  entryComponents: [
    ContainerComponent
  ]
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) { }
  ngDoBootstrap() {
    this.upgrade.bootstrap(document.body, ['heroApp'], { strictDi: true });
  }
}
// #enddocregion heroupgrade

bangular.module('heroApp', [])
  .component('heroDetail', heroDetail)
  .directive(
    'myContainer',
    downgradeComponent({component: ContainerComponent}) as bangular.IDirectiveFactory
  );

platformBrowserDynamic().bootstrapModule(AppModule);
