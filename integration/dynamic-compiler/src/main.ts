import { enableProdMode } from '@bangular/core';
import { platformBrowser } from '@bangular/platform-browser';

import { AppModuleNgFactory } from './app.module.ngfactory';

enableProdMode();

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
