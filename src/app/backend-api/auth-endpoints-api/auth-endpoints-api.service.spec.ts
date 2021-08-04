import { TestBed } from '@angular/core/testing';

import { AuthEndpointsApiService } from './auth-endpoints-api.service';

describe('AuthEndpointsApiService', () => {
  let service: AuthEndpointsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthEndpointsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
