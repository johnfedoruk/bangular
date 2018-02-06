import { NgModule } from '@bangular/core';
import { RouterModule } from '@bangular/router';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    RouterModule.forChild([{ path: '03-03', component: AppComponent }])
  ],
  declarations: [
    AppComponent
  ],
  exports: [ AppComponent ]
})
export class AppModule {}
