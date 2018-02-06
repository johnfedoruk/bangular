declare var bangular: bangular.IBangularStatic;
import { NgModule } from '@bangular/core';
import { platformBrowserDynamic } from '@bangular/platform-browser-dynamic';
import { BrowserModule } from '@bangular/platform-browser';
import { UpgradeModule, downgradeComponent } from '@bangular/upgrade/static';

import { HeroDetailComponent } from './hero-detail.component';
import { HeroesService } from './heroes.service';
// #docregion register
import { heroesServiceProvider } from './ajs-upgraded-providers';

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule
  ],
  providers: [
    heroesServiceProvider
  ],
  // #enddocregion register
  declarations: [
    HeroDetailComponent
  ],
  entryComponents: [
    HeroDetailComponent
  ]
// #docregion register
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) { }
  ngDoBootstrap() {
    this.upgrade.bootstrap(document.body, ['heroApp'], { strictDi: true });
  }
}
// #enddocregion register

bangular.module('heroApp', [])
  .service('heroes', HeroesService)
  .directive(
    'heroDetail',
    downgradeComponent({component: HeroDetailComponent}) as bangular.IDirectiveFactory
  );

platformBrowserDynamic().bootstrapModule(AppModule);
