// #docregion
import { Component } from '@bangular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  birthday = new Date(1988, 3, 15); // April 15, 1988
}
