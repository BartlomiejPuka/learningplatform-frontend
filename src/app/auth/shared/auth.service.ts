import {Injectable, Output} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {SingupRequestPayload} from '../models/signup-request.payload';
import {Observable, Subject} from 'rxjs';
import {LoginRequestPayload} from '../models/login.request.payload';
import {LocalStorageService} from 'ngx-webstorage';
import {map} from 'rxjs/operators';
import {LoginResponsePayload} from '../models/login.response.payload';
import {InterceptorSkipHeader} from '../../interceptors/AppInterceptor';
import {AuthStoreService} from './store/auth-store.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedInChangedSource = new Subject<boolean>();
  loggedInChanged$ = this.loggedInChangedSource.asObservable();
  private usernameChangedSource = new Subject<string>();
  usernameChanged$ = this.usernameChangedSource.asObservable();
  loginApiRoute = 'http://localhost:8080/api/auth/login';
  signupApiRoute = 'http://localhost:8080/api/auth/signup';
  constructor(private httpClient: HttpClient, private authStoreService: AuthStoreService) { }

  signup(signupRequestPayload: SingupRequestPayload): Observable<any>{
    const headers = new HttpHeaders().set(InterceptorSkipHeader, '');
    return this.httpClient.post(this.signupApiRoute, signupRequestPayload,
      {responseType: 'text', headers});
  }
  login(loginRequestPayload: LoginRequestPayload): Observable<boolean>{
    const headers = new HttpHeaders().set(InterceptorSkipHeader, '');
    return this.httpClient.post<LoginResponsePayload>(this.loginApiRoute,
      loginRequestPayload, {
        headers
      }).pipe(map(data => {
        this.authStoreService.store('authenticationToken', data.authenticationToken);
        this.authStoreService.store('username', data.username);
        this.authStoreService.store('refreshToken', data.refreshToken);
        this.authStoreService.store('expiresAt', data.expiresAt);
        this.loggedInChangedSource.next(true);
        this.usernameChangedSource.next(data.username);
        console.log(data.username);
        return true;
    }));
  }
  isLoggedIn(): boolean {
    return this.authStoreService.getJwtToken() != null;
  }
  logout(): void{
    this.authStoreService.clear('authenticationToken');
    this.authStoreService.clear('username');
    this.authStoreService.clear('refreshToken');
    this.authStoreService.clear('expiresAt');
  }
}
