import { Injectable } from '@angular/core';
import { VoucherBatchesjson } from './voucher-batchesjson';

@Injectable({
  providedIn: 'root'
})
export class VoucherBatchesjsonService {
  getData(tableName: string): any[] {
    return VoucherBatchesjson[tableName];
  }
}
