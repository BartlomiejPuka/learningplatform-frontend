import { Injectable } from '@angular/core';
import {ApiEndpointsService} from '../api-endpoints.service';

@Injectable({
  providedIn: 'root'
})
export class EnrolledCourseEndpointsApiService extends ApiEndpointsService{

  public getAllBoughtCourses(): string {
    return this.createUrl('user/courses/bought');
  }
}
