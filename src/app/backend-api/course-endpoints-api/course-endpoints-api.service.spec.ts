import { TestBed } from '@angular/core/testing';

import { CourseEndpointsApiService } from './course-endpoints-api.service';

describe('CourseEndpointsApiService', () => {
  let service: CourseEndpointsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseEndpointsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
