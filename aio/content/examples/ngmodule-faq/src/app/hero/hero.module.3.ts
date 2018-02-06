import { NgModule }            from '@bangular/core';
import { CommonModule }        from '@bangular/common';
import { FormsModule }         from '@bangular/forms';

import { HeroComponent }       from './hero.component.3';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroListComponent }   from './hero-list.component';
import { HeroRoutingModule }   from './hero-routing.module.3';

import { HighlightDirective }  from './highlight.directive';

// #docregion class
@NgModule({
  imports: [ CommonModule, FormsModule, HeroRoutingModule ],
  declarations: [
    HeroComponent, HeroDetailComponent, HeroListComponent,
    HighlightDirective
  ]
})
export class HeroModule { }
// #enddocregion class
