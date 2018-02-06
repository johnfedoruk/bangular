/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://bangular.io/license
 */

// #docregion Reactive
import {Component} from '@bangular/core';
import {FormControl, FormGroup} from '@bangular/forms';

@Component({
  selector: 'example-app',
  template: `
    <form [formGroup]="form">
      <input type="radio" formControlName="food" value="beef" > Beef
      <input type="radio" formControlName="food" value="lamb"> Lamb
      <input type="radio" formControlName="food" value="fish"> Fish
    </form>
    
    <p>Form value: {{ form.value | json }}</p>  <!-- {food: 'lamb' } -->
  `,
})
export class ReactiveRadioButtonComp {
  form = new FormGroup({
    food: new FormControl('lamb'),
  });
}
// #enddocregion
