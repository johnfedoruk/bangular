/* tslint:disable:component-class-suffix */
// #docregion imports
import { Component }              from '@bangular/core';
import { FormBuilder, FormGroup } from '@bangular/forms';
// #enddocregion imports

@Component({
  selector: 'app-hero-detail-3',
  templateUrl: './hero-detail-3.component.html'
})
// #docregion v3a
export class HeroDetailComponent3 {
  heroForm: FormGroup; // <--- heroForm is of type FormGroup

  constructor(private fb: FormBuilder) { // <--- inject FormBuilder
    this.createForm();
  }

  createForm() {
    this.heroForm = this.fb.group({
      name: '', // <--- the FormControl called "name"
    });
  }
}
// #enddocregion v3a
