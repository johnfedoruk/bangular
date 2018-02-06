// #docregion
// #docregion imports
import { platformBrowserDynamic } from '@bangular/platform-browser-dynamic';

import { AppModule } from './app.module';
// #enddocregion imports

// #docregion bootstrap
platformBrowserDynamic().bootstrapModule(AppModule);
// #enddocregion bootstrap
