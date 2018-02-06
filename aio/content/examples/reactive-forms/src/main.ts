// tslint:disable:no-unused-variable
import { enableProdMode } from '@bangular/core';
import { platformBrowserDynamic } from '@bangular/platform-browser-dynamic';

import { AppModule } from './app/app.module'; // just the final version
import { DemoModule } from './app/demo.module'; // demo picker
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(DemoModule);
