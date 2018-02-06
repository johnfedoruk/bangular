// #docregion
import { NgModule }      from '@bangular/core';
import { BrowserModule } from '@bangular/platform-browser';
import { FormsModule }   from '@bangular/forms';

import { AppComponent }          from './app.component';
import { HeroTaxReturnComponent }     from './hero-tax-return.component';
import { HeroesListComponent }   from './heroes-list.component';
import { HeroesService }         from './heroes.service';
import { VillainsListComponent } from './villains-list.component';

import { carComponents, carServices } from './car.components';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    carServices,
    HeroesService
 ],
  declarations: [
    AppComponent,
    carComponents,
    HeroesListComponent,
    HeroTaxReturnComponent,
    VillainsListComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

