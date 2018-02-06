import { Injectable } from '@bangular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@bangular/common/http';

import { Observable } from 'rxjs/Observable';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class NoopInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    return next.handle(req);
  }
}
