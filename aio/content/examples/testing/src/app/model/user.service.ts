import { Injectable } from '@bangular/core';

@Injectable()
export class UserService {
  isLoggedIn = true;
  user = {name: 'Sam Spade'};
}
