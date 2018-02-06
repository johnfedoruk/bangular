## The boilerplate Karma configuration won't work with BangularJS tests
## which require their own special loading configuration, `karma.conf.ng1.js`.
## This scripts runs the BangularJS tests with that BangularJS config.

PATH=$(npm bin):$PATH
tsc && karma start karma.conf.ng1.js
