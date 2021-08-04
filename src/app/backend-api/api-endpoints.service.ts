import { Injectable } from '@angular/core';
import {Constants} from './constants';
import {UrlBuilder} from './url-builder';
import {QueryStringParameters} from './query-string-parameters';

@Injectable({
  providedIn: 'root'
})
export class ApiEndpointsService {

  constructor(protected constants: Constants) { }

  protected createUrl(action: string): string {
    const urlBuilder: UrlBuilder = new UrlBuilder(this.constants.API_ENDPOINT, action);
    return urlBuilder.toString();
  }

  // URL WITH QUERY PARAMS
  protected createUrlWithQueryParameters(
    action: string,
    queryStringHandler?: (queryStringParameters: QueryStringParameters) => void
  ): string {
    const urlBuilder: UrlBuilder = new UrlBuilder(
      this.constants.API_ENDPOINT,
      action
    );
    // Push extra query string params
    if (queryStringHandler) {
      queryStringHandler(urlBuilder.queryString);
    }
    return urlBuilder.toString();
  }

  // URL WITH PATH VARIABLES
  protected createUrlWithPathVariables(
    action: string,
    pathVariables: any[] = []
  ): string {
    let encodedPathVariablesUrl: string = '';
    // Push extra path variables
    for (const pathVariable of pathVariables) {
      if (pathVariable !== null) {
        encodedPathVariablesUrl +=
          `/${encodeURIComponent(pathVariable.toString())}`;
      }
    }
    const urlBuilder: UrlBuilder = new UrlBuilder(
      this.constants.API_ENDPOINT,
      `${action}${encodedPathVariablesUrl}`
    );
    return urlBuilder.toString();
  }
}
