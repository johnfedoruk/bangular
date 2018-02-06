// #docplaster
// #docregion
// #docregion v1
import { Component } from '@bangular/core';
// #enddocregion v1
import { UserService } from './user.service';
// #docregion v1

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html'
})
export class TitleComponent {
  title = 'Bangular Modules';
// #enddocregion v1
  user = '';

  constructor(userService: UserService) {
    this.user = userService.userName;
  }
// #docregion v1
}
// #enddocregion v1
