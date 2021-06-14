import { Injectable } from '@angular/core';
import {HttpHeaders} from '@angular/common/http';

@Injectable()
export class Constants {
  public readonly API_ENDPOINT: string = 'http://localhost:8080/api';
  public readonly defaultOptions: any = {
      headers: new HttpHeaders({'Content-Type': 'application/json'}),
    };
}