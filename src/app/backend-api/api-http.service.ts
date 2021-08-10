import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Constants} from './constants';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiHttpService {

  constructor(
    private http: HttpClient,
    private constants: Constants
  ) { }
  // tslint:disable-next-line:typedef
  public get<T>(url: string, options?: {
    headers?: HttpHeaders | {
      [header: string]: string | string[];
    };
    observe?: 'body';
    params?: HttpParams | {
      [param: string]: string | string[];
    };
    reportProgress?: boolean;
    responseType?: 'json';
    withCredentials?: boolean;
  }): Observable<T> {
    options = options ? options : this.constants.defaultOptions;
    return this.http.get<T>(url, options);
  }
    // tslint:disable-next-line:typedef
  public post<T>(url: string, data: any, options?: any) {
    if (!options){
      options = this.constants.defaultOptions;
    } else{
      options.headers.set('Access-Control-Allow-Origin', '*');
    }
    return this.http.post<T>(url, data, options);
    // tslint:disable-next-line:typedef
  }  public put<T>(url: string, data: any, options?: any) {
    return this.http.put<T>(url, data, options);
    // tslint:disable-next-line:typedef
  }  public delete<T>(url: string, options?: any) {
    return this.http.delete<T>(url, options);
  }
}
