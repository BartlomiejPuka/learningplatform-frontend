import {Injectable} from '@angular/core';
import {HttpHeaders, HttpResponse} from '@angular/common/http';
import {SingupRequestPayload} from '../models/signup-request.payload';
import {Observable, Subject} from 'rxjs';
import {LoginRequestPayload} from '../models/login.request.payload';
import {map} from 'rxjs/operators';
import {InterceptorSkipHeader} from '../../interceptors/AppInterceptor';
import {AuthStoreService} from './store/auth-store.service';
import jwt_decode, {JwtPayload} from 'jwt-decode';
import {AuthEndpointsApiService} from '../../backend-api/auth-endpoints-api/auth-endpoints-api.service';
import {ApiHttpService} from '../../backend-api/api-http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedInChangedSource = new Subject<boolean>();
  loggedInChanged$ = this.loggedInChangedSource.asObservable();
  private usernameChangedSource = new Subject<string>();
  usernameChanged$ = this.usernameChangedSource.asObservable();
  constructor(
    private authEndpointsApiService: AuthEndpointsApiService,
    private apiHttpService: ApiHttpService,
    private authStoreService: AuthStoreService) { }

  signup(signupRequestPayload: SingupRequestPayload): Observable<any>{
    const headers = new HttpHeaders().set(InterceptorSkipHeader, '');
    return this.apiHttpService.post(this.authEndpointsApiService.signup(), signupRequestPayload,
      {responseType: 'text', headers});
  }
  login(loginRequestPayload: LoginRequestPayload): Observable<boolean>{
    const headers = new HttpHeaders().set(InterceptorSkipHeader, '');
    return this.apiHttpService.post<LoginRequestPayload>(this.authEndpointsApiService.login(),
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
