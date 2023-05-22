import { TestBed } from '@angular/core/testing';

import { AllAccountServiceService } from './all-account.service.service';

describe('AllAccountServiceService', () => {
  let service: AllAccountServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllAccountServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
