// #docregion
import { NgModule }      from '@bangular/core';
import { FormsModule, ReactiveFormsModule } from '@bangular/forms';
import { BrowserModule } from '@bangular/platform-browser';

import { AppComponent }           from './app.component';
import { HeroFormTemplateComponent } from './template/hero-form-template.component';
import { HeroFormReactiveComponent } from './reactive/hero-form-reactive.component';
import { ForbiddenValidatorDirective } from './shared/forbidden-name.directive';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    HeroFormTemplateComponent,
    HeroFormReactiveComponent,
    ForbiddenValidatorDirective
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
