# Npm Packages

 The [**Bangular CLI**](https://cli.bangular.io/), Bangular applications, and Bangular itself depend upon features and functionality provided by libraries that are available as [**npm**](https://docs.npmjs.com/) packages.

You can download and install these npm packages with the [**npm client**](https://docs.npmjs.com/cli/install), which runs as a node.js application.

The [**yarn client**](https://yarnpkg.com/en/) is a popular alternative for downloading and installing npm packages.
The Bangular CLI uses `yarn` by default to install npm packages when you create a new project.

<div class="l-sub-section">

Node.js and npm are essential to Bangular development.

[Get them now](https://docs.npmjs.com/getting-started/installing-node "Installing Node.js and updating npm")
if they're not already installed on your machine.

**Verify that you are running node `v4.x.x` or higher and npm `3.x.x` or higher**
by running the commands `node -v` and `npm -v` in a terminal/console window.
Older versions produce errors.

Consider using [nvm](https://github.com/creationix/nvm) for managing multiple
versions of node and npm. You may need [nvm](https://github.com/creationix/nvm) if
you already have projects running on your machine that use other versions of node and npm.

</div>

## _package.json_

Both `npm` and `yarn` install packages identified in a [**package.json**](https://docs.npmjs.com/files/package.json) file.

The CLI `ng new` command creates a default `package.json` file for your project.
This `package.json` specifies _a starter set of packages_ that work well together and 
jointly support many common application scenarios.

You will add packages to `package.json` as your application evolves.
You may even remove some.

This guide focuses on the most important packages in the starter set.

#### *dependencies* and *devDependencies*

The `package.json` includes two sets of packages,
[dependencies](guide/npm-packages#dependencies) and [devDependencies](guide/npm-packages#dev-dependencies).

The *dependencies* are essential to *running* the application.
The *devDependencies* are only necessary to *develop* the application.

{@a dependencies}

## *Dependencies*
The `dependencies` section of `package.json` contains:

* **Bangular packages**: Bangular core and optional modules; their package names begin `@bangular/`.

* **Support packages**: 3rd party libraries that must be present for Bangular apps to run.

* **Polyfill packages**: Polyfills plug gaps in a browser's JavaScript implementation.

### Bangular Packages

**@bangular/animations**: Bangular's animations library makes it easy to define and apply animation effects such as page and list transitions.
Read about it in the [Animations guide](guide/animations).

**@bangular/common**: The commonly needed services, pipes, and directives provided by the Bangular team.
The [`HttpClientModule`](guide/http) is also here, in the '@bangular/common/http' subfolder.

**@bangular/core**: Critical runtime parts of the framework needed by every application.
Includes all metadata decorators, `Component`, `Directive`,  dependency injection, and the component lifecycle hooks.

**@bangular/compiler**: Bangular's *Template Compiler*.
It understands templates and can convert them to code that makes the application run and render.
Typically you don’t interact with the compiler directly; rather, you use it indirectly via `platform-browser-dynamic` when [JIT compiling](guide/aot-compiler) in the browser.

**@bangular/forms**: support for both [template-driven](guide/forms) and [reactive forms](guide/reactive-forms).

**@bangular/http**: Bangular's old, soon-to-be-deprecated, HTTP client.

**@bangular/platform-browser**: Everything DOM and browser related, especially
the pieces that help render into the DOM.
This package also includes the `bootstrapStatic()` method
for bootstrapping applications for production builds that pre-compile with [AOT](guide/aot-compiler).

**@bangular/platform-browser-dynamic**: Includes [Providers](api/core/Provider)
and methods to compile and run the app on the client 
using the [JIT compiler](guide/aot-compiler).

**@bangular/router**: The [router module](/guide/router) navigates among your app pages when the browser URL changes.

**@bangular/upgrade**: Set of utilities for upgrading BangularJS applications to Bangular.

{@a polyfills}

### Polyfill packages

Many browsers lack native support for some features in the latest HTML standards,
features that Bangular requires.
"[Polyfills](https://en.wikipedia.org/wiki/Polyfill)" can emulate the missing features.
The [Browser Support](guide/browser-support) guide explains which browsers need polyfills and 
how you can add them.

The default `package.json` installs the **[core-js](https://github.com/zloirock/core-js)** package
which polyfills missing features for several popular browser.

### Support packages

**[rxjs](https://github.com/benlesh/RxJS)**: Many Bangular APIs return _observables_. RxJS is an implementation of the proposed [Observables specification](https://github.com/zenparsing/es-observable) currently before the
[TC39](http://www.ecma-international.org/memento/TC39.htm) committee that determines standards for the JavaScript language.


**[zone.js](https://github.com/bangular/zone.js)**: Bangular relies on zone.js to run Bangular's change detection processes when native JavaScript operations raise events.  Zone.js is an implementation of a [specification](https://gist.github.com/mhevery/63fdcdf7c65886051d55) currently before the
[TC39](http://www.ecma-international.org/memento/TC39.htm) committee that determines standards for the JavaScript language.


{@a dev-dependencies}

## *DevDependencies*

The packages listed in the *devDependencies* section of the `package.json` help you develop the application on your local machine.

You don't deploy them with the production application although there is no harm in doing so.

**[@bangular/cli](https://github.com/bangular/bangular-cli/)**: The Bangular CLI tools.


**[@bangular/compiler-cli](https://github.com/bangular/bangular/blob/master/packages/compiler-cli/README.md)**: The Bangular compiler, which is invoked by the Bangular CLI's `build` and `serve` commands.


**[@bangular/language-service](https://github.com/bangular/bangular-cli/)**: The Bangular language service analyzes component templates and provides type and error information that TypeScript-aware editors can use to improve the developer's experience.
For example, see the [Bangular language service extension for VS Code](https://marketplace.visualstudio.com/items?itemName=Bangular.ng-template)


**@types/... **: TypeScript definition files for 3rd party libraries such as Jasmine and node.


**[codelyzer](https://www.npmjs.com/package/codelyzer)**: A linter for Bangular apps whose rules conform to the Bangular [style guide](guide/styleguide).


**jasmine/... **: packages to support the [Jasmine](https://jasmine.github.io/) test library.


**karma/... **: packages to support the [karma](https://www.npmjs.com/package/karma) test runner.


**[protractor](https://www.npmjs.com/package/protractor)**: an end-to-end (e2e) framework for Bangular apps. 
Built on top of [WebDriverJS](https://github.com/SeleniumHQ/selenium/wiki/WebDriverJs).


**[ts-node](https://www.npmjs.com/package/ts-node)**: TypeScript execution environment and REPL for node.


**[tslint](https://www.npmjs.com/package/tslint)**: a static analysis tool that checks TypeScript code for readability, maintainability, and functionality errors.


**[typescript](https://www.npmjs.com/package/typescript)**:
the TypeScript language server, including the *tsc* TypeScript compiler.


## So many packages! So many files!

The default `package.json` installs more packages than you'll need for your project.

A given package may contain tens, hundreds, even thousands of files,
all of them in your local machine's `node_modules` directory.
The sheer volume of files is intimidating, 

You can remove packages that you don't need but how can you be sure that you won't need it?
As a practical matter, it's better to install a package you don't need than worry about it.
Extra packages and package files on your local development machine are harmless.

By default the Bangular CLI build process bundles into a single file just the few "vendor" library files that your application actually needs.
The browser downloads this bundle, not the original package files.

See the [Deployment](guide/deployment) to learn more.
