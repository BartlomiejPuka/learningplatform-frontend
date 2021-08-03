import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {SingupRequestPayload} from '../models/signup-request.payload';
import {Observable, Subject} from 'rxjs';
import {LoginRequestPayload} from '../models/login.request.payload';
import {map} from 'rxjs/operators';
import {InterceptorSkipHeader} from '../../interceptors/AppInterceptor';
import {AuthStoreService} from './store/auth-store.service';
import jwt_decode, {JwtPayload} from 'jwt-decode';

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

    return this.httpClient.post<LoginRequestPayload>(this.loginApiRoute,
        JSON.stringify(loginRequestPayload)
      , {
        headers, observe: 'response'
      }).pipe(map((data: HttpResponse<any>) => {
        console.log('headers', data.headers);
        const encodedJwtToken = data.headers.get('Authorization');
        const refreshToken = data.headers.get('refresh-token');
        const decodedJwtToken = this.getDecodedAccessToken(encodedJwtToken);
        console.log(decodedJwtToken);
        this.authStoreService.store('encodedJwtToken', encodedJwtToken);
        this.authStoreService.store('username', decodedJwtToken.sub);
        this.authStoreService.store('refreshToken', refreshToken);
        this.authStoreService.store('expiresAt', decodedJwtToken.exp);
        this.authStoreService.store('roles', decodedJwtToken[`roles`]);
        this.loggedInChangedSource.next(true);
        this.usernameChangedSource.next(decodedJwtToken.sub);
        // console.log(data.username);
        return true;
    }));
  }
  getDecodedAccessToken(token: string): JwtPayload {
    try{
      return jwt_decode<JwtPayload>(token);
    }
    catch(Error){
      return null;
    }
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
