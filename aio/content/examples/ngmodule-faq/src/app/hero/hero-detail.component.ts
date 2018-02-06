import { Component, OnInit } from '@bangular/core';
import { ActivatedRoute }    from '@bangular/router';

import { Hero,
         HeroService }    from './hero.service';

@Component({
  template: `
    <h3 highlight>Hero Detail</h3>
    <div *ngIf="hero">
      <div>Id: {{hero.id}}</div><br>
      <label>Name:
        <input [(ngModel)]="hero.name">
      </label>
    </div>
    <br>
    <a routerLink="../">Hero List</a>
  `
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService) { }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    this.heroService.getHero(id).subscribe(hero => this.hero = hero);
  }
}
