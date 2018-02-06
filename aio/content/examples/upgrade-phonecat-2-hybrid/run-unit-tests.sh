## The boilerplate Karma configuration won't work with BangularJS tests since
## a specific loading configuration is needed for them.
## We keep one in karma.conf.ajs.js. This scripts runs the BangularJS tests with
## that config.

PATH=$(npm bin):$PATH
tsc && karma start karma.conf.ajs.js
