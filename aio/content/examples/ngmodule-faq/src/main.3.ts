import { enableProdMode } from '@bangular/core';
import { platformBrowserDynamic } from '@bangular/platform-browser-dynamic';

import { AppModule } from './app/app.module.3';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
