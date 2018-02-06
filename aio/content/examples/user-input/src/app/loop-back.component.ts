// #docregion
import { Component } from '@bangular/core';
// #docregion loop-back-component
@Component({
  selector: 'app-loop-back',
  template: `
    <input #box (keyup)="0">
    <p>{{box.value}}</p>
  `
})
export class LoopbackComponent { }
// #enddocregion loop-back-component
