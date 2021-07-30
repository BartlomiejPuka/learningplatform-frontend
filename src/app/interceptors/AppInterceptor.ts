import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {AuthStoreService} from '../auth/shared/store/auth-store.service';

export const InterceptorSkipHeader = 'X-Skip-Interceptor';

@Injectable()
export class AppInterceptor implements HttpInterceptor {
  constructor(private authStoreService: AuthStoreService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.headers.has(InterceptorSkipHeader)) {
      const headers = req.headers.delete(InterceptorSkipHeader);
      return next.handle(req.clone({ headers }));
    }
    console.log('jwt token ', this.authStoreService.getJwtToken());
    const clonedRequest = req.clone({
      headers: req.headers.set('Authorization',  'Bearer ' + this.authStoreService.getJwtToken())
    });
    return next.handle(clonedRequest);
  }
}
