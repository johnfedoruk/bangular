/* tslint:disable:component-class-suffix */
// #docregion imports
import { Component }              from '@bangular/core';
import { FormControl, FormGroup } from '@bangular/forms';
// #enddocregion imports

@Component({
  selector: 'app-hero-detail-2',
  templateUrl: './hero-detail-2.component.html'
})
// #docregion v2
export class HeroDetailComponent2 {
  heroForm = new FormGroup ({
    name: new FormControl()
  });
}
// #enddocregion v2
