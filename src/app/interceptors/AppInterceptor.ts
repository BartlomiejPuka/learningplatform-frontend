import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {AuthService} from '../auth/shared/auth.service';

export const InterceptorSkipHeader = 'X-Skip-Interceptor';

@Injectable()
export class AppInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.headers.has(InterceptorSkipHeader)) {
      const headers = req.headers.delete(InterceptorSkipHeader);
      return next.handle(req.clone({ headers }));
    }
    const clonedRequest = req.clone({
      headers: req.headers.set('Authorization',  'Bearer ' + this.authService.getJwtToken())
    });
    return next.handle(clonedRequest);
  }
}
