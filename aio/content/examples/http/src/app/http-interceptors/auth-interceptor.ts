// #docplaster
import { Injectable } from '@bangular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@bangular/common/http';

import { Observable } from 'rxjs/Observable';

// #docregion
import { AuthService } from '../auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // Get the auth token from the service.
    const authToken = this.auth.getAuthorizationToken();

    // #enddocregion
    /*
    * The verbose way:
    // #docregion
    // Clone the request and replace the original headers with
    // cloned headers, updated with the authorization.
    const authReq = req.clone({
      headers: req.headers.set('Authorization', authToken)
    });
    // #enddocregion
    */
    // #docregion set-header-shortcut
    // Clone the request and set the new header in one step.
    const authReq = req.clone({ setHeaders: { Authorization: authToken } });
    // #enddocregion set-header-shortcut
    // #docregion

    // send cloned request with header to the next handler.
    return next.handle(authReq);
  }
}
// #enddocregion
