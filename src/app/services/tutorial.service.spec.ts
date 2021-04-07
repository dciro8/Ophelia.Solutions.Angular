import { TestBed } from '@angular/core/testing';

import { ProductAllService } from './Product.service';

describe('productAllService', () => {
  let service: ProductAllService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductAllService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
