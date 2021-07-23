import { Injectable } from '@angular/core';
import {Constants} from './constants';
import {UrlBuilder} from './url-builder';
import {QueryStringParameters} from './query-string-parameters';

@Injectable({
  providedIn: 'root'
})
export class ApiEndpointsService {

  constructor(private constants: Constants) { }

  private createUrl(action: string): string {
    const urlBuilder: UrlBuilder = new UrlBuilder(this.constants.API_ENDPOINT, action);
    return urlBuilder.toString();
  }

  // URL WITH QUERY PARAMS
  private createUrlWithQueryParameters(
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
  private createUrlWithPathVariables(
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
  /* #endregion */
  // BACKEND API
  public getCoursesEndpoint(queryStringHandler?: (queryStringParameters: QueryStringParameters) => void): string {
    return this.createUrlWithQueryParameters('courses', queryStringHandler);
  }
  public getCategorizedCoursesEndpoint(): string {
    return this.createUrl('courses/categorized');
  }
  public getCategories(): string {
    return this.createUrl('courses/categories');
  }
  public getCourseDetailsByUrlSlug(slug: string): string {
    return this.createUrl(`courses/${slug}/details`);
  }

  public getAllCartItems(): string {
    return this.createUrl('cart');
  }

  public addCartItem(): string {
    return this.createUrl('cart/add');
  }

  public removeCartItem(id: number): string {
    return this.createUrl(`cart/items/${id}/remove`);
  }

  public submitCart(): string {
    return this.createUrl('cart/submit');
  }
  public getCourseProductsByUrlSlug(urlSlug: string): string {
    return this.createUrl(`products/category/${urlSlug}`);
  }

  public getCategoryByUrlSlug(urlSlug: string): string {
    return this.createUrl(`courses/categories/${urlSlug}`);
  }
  public getCartItemsCount(): string {
    return this.createUrl('cart/count');
  }
  /* #endregion */
}
