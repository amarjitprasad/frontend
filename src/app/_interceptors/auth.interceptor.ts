import { HttpInterceptor, HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()

export class AuthInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token: string = localStorage.getItem('LoggedInToken');
    if (!request.headers.has('Content-Type')) {
      // request = request.clone({ headers: request.headers.set('Content-Type', 'application/json; charset=utf-8') });
      request = request.clone({
        headers: new HttpHeaders({
          'Content-Type': 'application/json; charset=utf-8',
        })
      });
    }

    if (!token) {
      const authReq = request.clone({
        headers: new HttpHeaders({
          'Content-Type': 'application/json; charset=utf-8',
        })
      });
      return next.handle(authReq);
    }
    if (token) {
      const authReq = request.clone({
        headers: new HttpHeaders({
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json; charset=utf-8',
        })
      });
      return next.handle(authReq);
    }

  }
}