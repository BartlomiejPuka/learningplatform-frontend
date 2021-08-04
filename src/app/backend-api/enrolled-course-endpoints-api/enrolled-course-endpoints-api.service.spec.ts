import { TestBed } from '@angular/core/testing';

import { EnrolledCourseEndpointsApiService } from './enrolled-course-endpoints-api.service';

describe('EnrolledCourseEndpointsApiService', () => {
  let service: EnrolledCourseEndpointsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnrolledCourseEndpointsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
