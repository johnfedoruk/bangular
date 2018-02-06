// #docplaster
// #docregion
import { Component, OnInit, Input } from '@bangular/core';
// #docregion added-imports
import { ActivatedRoute } from '@bangular/router';
import { Location } from '@bangular/common';

// #enddocregion added-imports
import { Hero }         from '../hero';
// #docregion added-imports
import { HeroService }  from '../hero.service';
// #enddocregion added-imports

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.css' ]
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  // #docregion ctor
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}
  // #enddocregion ctor

  // #docregion ngOnInit
  ngOnInit(): void {
    this.getHero();
  }

  // #docregion getHero
  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }
  // #enddocregion getHero
  // #enddocregion ngOnInit

  // #docregion goBack
  goBack(): void {
    this.location.back();
  }
// #enddocregion goBack
}
