import { Injectable } from '@angular/core';
import {HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable()
export class Constants {
  baseUrl = environment.baseUrl;
  public readonly API_ENDPOINT: string = `${ this.baseUrl }`;
  public readonly defaultOptions: any = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': 'https://spring-learning-platform.herokuapp.com/',
        'Access-Control-Allow-Header': '*',
      }),
    };
}
