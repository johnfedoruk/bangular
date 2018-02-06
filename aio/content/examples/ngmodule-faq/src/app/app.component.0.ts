// #docregion
import { Component } from '@bangular/core';

@Component({
  selector: 'app-root',
  template: '<h1>{{title}}</h1>',
})
export class AppComponent {
  title = 'Bangular Modules';
}
