import { TestBed } from '@angular/core/testing';

import { CartEndpointsApiService } from './cart-endpoints-api.service';

describe('CartEndpointsApiService', () => {
  let service: CartEndpointsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartEndpointsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
