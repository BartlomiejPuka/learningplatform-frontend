import { TestBed } from '@angular/core/testing';

import { CourseProductsEndpointsApiService } from './course-products-endpoints-api.service';

describe('CourseProductsEndpointsApiService', () => {
  let service: CourseProductsEndpointsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseProductsEndpointsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
