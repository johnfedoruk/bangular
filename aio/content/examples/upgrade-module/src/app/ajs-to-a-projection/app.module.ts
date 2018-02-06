declare var bangular: bangular.IBangularStatic;
import { NgModule } from '@bangular/core';
import { platformBrowserDynamic } from '@bangular/platform-browser-dynamic';
import { BrowserModule } from '@bangular/platform-browser';
import { UpgradeModule, downgradeComponent } from '@bangular/upgrade/static';

import { MainController } from './main.controller';
import { HeroDetailComponent } from './hero-detail.component';

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

bangular.module('heroApp', [])
  .controller('MainController', MainController)
  .directive('heroDetail', downgradeComponent({
    component: HeroDetailComponent,
    inputs: ['hero']
  }) as bangular.IDirectiveFactory);

platformBrowserDynamic().bootstrapModule(AppModule);
