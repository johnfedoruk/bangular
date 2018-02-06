// #docregion
import { Injectable } from '@bangular/core';

@Injectable()
export class UserService {

  getUserById(userId: number): any {
    return {name: 'Bombasto', role: 'Admin'};
  }
}
