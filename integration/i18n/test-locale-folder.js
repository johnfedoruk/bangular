const fs = require('fs');
const path = require('path');

const packageJson = require('@bangular/common/package.json');
const localesFolder = packageJson['locales'];
if (!localesFolder) {
  throw new Error(`@bangular/common/package.json does not contain 'locales' entry.`)
}
const enLocalePath = `@bangular/common/${localesFolder}/en`;
try {
  require.resolve(enLocalePath);
} catch (err) {
  throw new Error(`@bangular/common does not contain 'en' locale in ${enLocalePath}.`)
}
