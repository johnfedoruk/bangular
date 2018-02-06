// #docregion
import { Component } from '@bangular/core';

@Component({
  selector: 'content-comp',
  // #docregion template
  template:
    `<div>
      <ng-content></ng-content>
    </div>`,
  // #enddocregion template
  styles: [ `
    div { border: medium dashed green; padding: 1em; width: 150px; text-align: center}
  `]
})
export class ContentComponent { }
