// #docregion
import { Directive, Input, OnChanges, SimpleChanges } from '@bangular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, Validators } from '@bangular/forms';

// #docregion custom-validator
/** A hero's name can't match the given regular expression */
export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? {'forbiddenName': {value: control.value}} : null;
  };
}
// #enddocregion custom-validator

// #docregion directive
@Directive({
  selector: '[appForbiddenName]',
  // #docregion directive-providers
  providers: [{provide: NG_VALIDATORS, useExisting: ForbiddenValidatorDirective, multi: true}]
  // #enddocregion directive-providers
})
export class ForbiddenValidatorDirective implements Validator {
  @Input() forbiddenName: string;

  validate(control: AbstractControl): {[key: string]: any} {
    return this.forbiddenName ? forbiddenNameValidator(new RegExp(this.forbiddenName, 'i'))(control)
                              : null;
  }
}
// #enddocregion directive

