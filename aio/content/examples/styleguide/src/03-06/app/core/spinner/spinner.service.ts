import { Injectable } from '@bangular/core';

export interface ISpinnerState { }

@Injectable()
export class SpinnerService {
  spinnerState: any;

  show() { }

  hide() { }
}
