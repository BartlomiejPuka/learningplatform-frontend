import { Injectable } from '@angular/core';
import {ApiEndpointsService} from '../api-endpoints.service';

@Injectable({
  providedIn: 'root'
})
export class CourseProductsEndpointsApiService extends ApiEndpointsService {

  public getCourseProductsDetailsByUrlSlug(slug: string): string {
    return this.createUrl(`products/course/${slug}/details`);
  }

  public getCourseProductsByUrlSlug(urlSlug: string): string {
    return this.createUrl(`products/category/${urlSlug}`);
  }

}

