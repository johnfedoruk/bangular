// #docregion
import { platformBrowserDynamic } from '@bangular/platform-browser-dynamic';
import { enableProdMode } from '@bangular/core';

import { AppModule } from './app/app.module';

// #docregion enable-prod
if (process.env.ENV === 'production') {
  enableProdMode();
}
// #enddocregion enable-prod

platformBrowserDynamic().bootstrapModule(AppModule);
// #enddocregion
