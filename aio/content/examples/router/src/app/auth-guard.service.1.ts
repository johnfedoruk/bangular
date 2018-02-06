// #docregion
import { Injectable }     from '@bangular/core';
import { CanActivate }    from '@bangular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate() {
    console.log('AuthGuard#canActivate called');
    return true;
  }
}
