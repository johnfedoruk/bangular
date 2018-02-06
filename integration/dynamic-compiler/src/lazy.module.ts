import {NgModule} from "@bangular/core";
import {Component} from '@bangular/core';

@Component({
  selector: 'lazy-component',
  template: 'Lazy-loaded component!'
})
export class LazyComponent {
  constructor() {
  }
}

@NgModule({
  declarations: [LazyComponent]
})
export class LazyModule {
}
