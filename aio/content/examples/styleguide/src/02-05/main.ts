// #docregion
import { platformBrowserDynamic } from '@bangular/platform-browser-dynamic';

import { AppModule }              from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule)
  .then(success => console.log(`Bootstrap success`))
  .catch(err => console.error(err));
