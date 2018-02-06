import { enableProdMode } from '@bangular/core';
import { platformBrowserDynamic } from '@bangular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// #docregion bootstrap
platformBrowserDynamic().bootstrapModule(AppModule);
// #enddocregion bootstrap
