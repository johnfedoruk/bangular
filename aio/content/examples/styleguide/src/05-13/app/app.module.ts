import { NgModule } from '@bangular/core';
import { RouterModule } from '@bangular/router';

import { AppComponent } from './app.component';
import { HeroButtonComponent, HeroHighlightDirective } from './heroes';

@NgModule({
  imports: [
    RouterModule.forChild([{ path: '05-13', component: AppComponent }])
  ],
  declarations: [
    AppComponent,
    HeroButtonComponent, HeroHighlightDirective
  ],
  exports: [ AppComponent ]
})
export class AppModule {}
