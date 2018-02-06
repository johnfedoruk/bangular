import { NgModule, NgModuleFactoryLoader, SystemJsNgModuleLoader } from '@bangular/core';

import { EmbedComponentsService } from './embed-components.service';


@NgModule({
  providers: [
    EmbedComponentsService,
    { provide: NgModuleFactoryLoader, useClass: SystemJsNgModuleLoader },
  ],
})
export class EmbedComponentsModule {
}
