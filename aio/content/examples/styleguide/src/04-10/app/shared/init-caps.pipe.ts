// #docregion
import { Pipe, PipeTransform } from '@bangular/core';

@Pipe({ name: 'initCaps' })
export class InitCapsPipe implements PipeTransform {
  transform = (value: string) => value;
}
