import { NgModule } from '@bangular/core';
import { ServiceWorkerModule } from '@bangular/service-worker';

import { SwUpdatesService } from './sw-updates.service';


@NgModule({
  imports: [
    ServiceWorkerModule
  ],
  providers: [
    SwUpdatesService
  ]
})
export class SwUpdatesModule {}
