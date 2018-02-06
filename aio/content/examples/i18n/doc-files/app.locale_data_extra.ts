// #docregion import-locale-extra
import { registerLocaleData } from '@bangular/common';
import localeFr from '@bangular/common/locales/fr';
import localeFrExtra from '@bangular/common/locales/extra/fr';

registerLocaleData(localeFr, 'fr-FR', localeFrExtra);
// #enddocregion import-locale-extra
