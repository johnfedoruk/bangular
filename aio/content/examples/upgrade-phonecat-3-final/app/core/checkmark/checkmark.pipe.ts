// #docregion
import { Pipe, PipeTransform } from '@bangular/core';

@Pipe({name: 'checkmark'})
export class CheckmarkPipe implements PipeTransform {
  transform(input: boolean) {
    return input ? '\u2713' : '\u2718';
  }
}
