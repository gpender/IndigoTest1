import { Component, OnInit } from '@angular/core';
import { VoucherBatchesjsonService } from './services/voucher-batchesjson.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public voucherBatchesjsonTable1: any[] = [];

  constructor(
    private voucherBatchesjsonService: VoucherBatchesjsonService,
  ) {}

  ngOnInit() {
    this.voucherBatchesjsonTable1 = this.voucherBatchesjsonService.getData('Table 1');
  }
}
