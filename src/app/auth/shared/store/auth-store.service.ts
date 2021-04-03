import { Injectable } from '@angular/core';
import {LocalStorageService} from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class AuthStoreService {
  constructor(private localStorage: LocalStorageService) { }
  store(key: string, value: any): void{
    this.localStorage.store(key, value);
  }
  retrieve(key: string): any{
    return this.localStorage.retrieve(key);
  }
  clear(key: string): void {
    this.localStorage.clear(key);
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
}
