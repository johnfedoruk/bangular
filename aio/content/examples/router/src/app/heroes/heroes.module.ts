// #docplaster
// #docregion
// #docregion v1
import { NgModule }       from '@bangular/core';
import { CommonModule }   from '@bangular/common';
import { FormsModule }    from '@bangular/forms';

import { HeroListComponent }    from './hero-list.component';
import { HeroDetailComponent }  from './hero-detail.component';

import { HeroService } from './hero.service';

// #enddocregion v1
import { HeroRoutingModule } from './heroes-routing.module';

// #docregion v1
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
// #enddocregion v1
    HeroRoutingModule
// #docregion v1
  ],
  declarations: [
    HeroListComponent,
    HeroDetailComponent
  ],
  providers: [ HeroService ]
})
export class HeroesModule {}
// #enddocregion v1
// #enddocregion
