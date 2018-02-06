(function (global) {
  SystemJS.typescriptOptions = {
    "target": "es5",
    "module": "system",
    "moduleResolution": "node",
    "sourceMap": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "noImplicitAny": true,
    "suppressImplicitAnyIndexErrors": true
  };
  System.config({
    transpiler: 'ts',
    meta: {
      'typescript': {
        "exports": "ts"
      }
    },
    paths: {
      'npm:': 'node_modules/'
    },
    map: {
      app: 'app',
      '@bangular/core': 'npm:@bangular/core/bundles/core.umd.min.js',
      '@bangular/common': 'npm:@bangular/common/bundles/common.umd.min.js',
      '@bangular/compiler': 'npm:@bangular/compiler/bundles/compiler.umd.min.js',
      '@bangular/platform-browser':
         'npm:@bangular/platform-browser/bundles/platform-browser.umd.min.js',
      '@bangular/platform-browser-dynamic':
         'npm:@bangular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.min.js',
      'rxjs': 'npm:rxjs',
      'bangular-in-memory-web-api': 'npm:bangular-in-memory-web-api/bundles/in-memory-web-api.umd.js',
      'ts': 'npm:plugin-typescript/lib/plugin.js',
      'typescript': 'npm:typescript/lib/typescript.js',
    },
    packages: {
      app: {
        defaultExtension: 'ts'
      },
      rxjs: {
        defaultExtension: 'js'
      }
    }
  });
})(this);