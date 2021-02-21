import {Injectable, Output} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SingupRequestPayload} from '../signup/signup-request.payload';
import {Observable, Subject} from 'rxjs';
import {LoginRequestPayload} from '../login/login.request.payload';
import {LocalStorageService} from 'ngx-webstorage';
import {map} from 'rxjs/operators';
import {LoginResponsePayload} from '../login/login.response.payload';
import {EventEmitter} from 'events';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedInChangedSource = new Subject<boolean>();
  loggedInChanged$ = this.loggedInChangedSource.asObservable();
  private usernameChangedSource = new Subject<string>();
  usernameChanged$ = this.usernameChangedSource.asObservable();

  constructor(private httpClient: HttpClient, private localStorage: LocalStorageService) { }

  signup(signupRequestPayload: SingupRequestPayload): Observable<any>{
    return this.httpClient.post('http://localhost:8080/api/auth/signup', signupRequestPayload, {responseType: 'text'});
  }
  login(loginRequestPayload: LoginRequestPayload): Observable<boolean>{
    return this.httpClient.post<LoginResponsePayload>('http://localhost:8080/api/auth/login',
      loginRequestPayload).pipe(map(data => {
        this.localStorage.store('authenticationToken', data.authenticationToken);
        this.localStorage.store('username', data.username);
        this.localStorage.store('refreshToken', data.refreshToken);
        this.localStorage.store('expiresAt', data.expiresAt);
        this.loggedInChangedSource.next(true);
        this.usernameChangedSource.next(data.username);
        console.log(data.username);
        return true;
    }));
  }
  getJwtToken() {
    return this.localStorage.retrieve('authenticationToken');
  }
  getUserName() {
    return this.localStorage.retrieve('username');
  }
  getRefreshToken() {
    return this.localStorage.retrieve('refreshToken');
  }
  isLoggedIn(): boolean {
    return this.getJwtToken() != null;
  }
  logout(){
    this.localStorage.clear('authenticationToken');
    this.localStorage.clear('username');
    this.localStorage.clear('refreshToken');
    this.localStorage.clear('expiresAt');
  }
}
