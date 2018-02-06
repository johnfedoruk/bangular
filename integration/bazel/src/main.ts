import {platformBrowser} from '@bangular/platform-browser';
import {AppModuleNgFactory} from './app.module.ngfactory';

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
