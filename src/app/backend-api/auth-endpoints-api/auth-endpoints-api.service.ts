import { Injectable } from '@angular/core';
import {ApiEndpointsService} from '../api-endpoints.service';

@Injectable({
  providedIn: 'root'
})
export class AuthEndpointsApiService extends ApiEndpointsService {
    public login(): string {
      return this.createUrl('auth/login');
    }
    public signup(): string {
      return this.createUrl('auth/signup');
    }
    public logout(): string {
      return this.createUrl('auth/loguout');
    }
    public refreshToken(): string {
        return this.createUrl('auth/refresh/token');
    }
}
