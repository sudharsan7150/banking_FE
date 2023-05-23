import { TestBed } from '@angular/core/testing';

import { GetTransactionServiceService } from './get-transaction.service.service';

describe('GetTransactionServiceService', () => {
  let service: GetTransactionServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetTransactionServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
