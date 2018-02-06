import { enableProdMode } from '@bangular/core';
import { platformBrowserDynamic } from '@bangular/platform-browser-dynamic';

import { AppModule } from './app/app.module.1b';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
