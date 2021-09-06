import { TestBed } from '@angular/core/testing';

import { VoucherBatchesjsonService } from './voucher-batchesjson.service';

describe('VoucherBatchesjsonService', () => {
  let service: VoucherBatchesjsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VoucherBatchesjsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
