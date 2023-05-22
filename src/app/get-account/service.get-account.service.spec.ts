import { TestBed } from '@angular/core/testing';

import { ServiceGetAccountService } from './service.get-account.service';

describe('ServiceGetAccountService', () => {
  let service: ServiceGetAccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceGetAccountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
