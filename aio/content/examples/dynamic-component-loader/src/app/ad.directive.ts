// #docregion
import { Directive, ViewContainerRef } from '@bangular/core';

@Directive({
  selector: '[ad-host]',
})
export class AdDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}

