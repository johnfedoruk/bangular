import { NgModule }       from '@bangular/core';
import { BrowserModule }  from '@bangular/platform-browser';
import { FormsModule }    from '@bangular/forms';

import { AppComponent } from './app.component';
import { BigHeroDetailComponent, HeroDetailComponent } from './hero-detail.component';
import { ClickDirective, ClickDirective2 } from './click.directive';
import { HeroFormComponent }      from './hero-form.component';
import { heroSwitchComponents }   from './hero-switch.components';
import { SizerComponent }         from './sizer.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    BigHeroDetailComponent,
    HeroDetailComponent,
    HeroFormComponent,
    heroSwitchComponents,
    ClickDirective,
    ClickDirective2,
    SizerComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
