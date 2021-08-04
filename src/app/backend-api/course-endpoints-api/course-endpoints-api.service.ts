import { Injectable } from '@angular/core';
import {ApiEndpointsService} from '../api-endpoints.service';
import {QueryStringParameters} from '../query-string-parameters';

@Injectable({
  providedIn: 'root'
})
export class CourseEndpointsApiService extends ApiEndpointsService {

  public getCourses(queryStringHandler?: (queryStringParameters: QueryStringParameters) => void): string {
    return this.createUrlWithQueryParameters('courses', queryStringHandler);
  }
  public getCourseCategoryByUrlSlug(urlSlug: string): string {
    return this.createUrl(`courses/categories/${urlSlug}`);
  }
  public getCategorizedCourses(): string {
    return this.createUrl('courses/categorized');
  }
  public getCoursesCategories(): string {
    return this.createUrl('courses/categories');
  }

}

