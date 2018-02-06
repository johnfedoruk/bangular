// #docregion
import { Injectable } from '@bangular/core';

@Injectable()
export class LoggerService {
  log(msg: string) {
    console.log(msg);
  }

  error(msg: string) {
    console.error(msg);
  }
}
