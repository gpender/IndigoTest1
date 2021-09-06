import { Component, OnInit } from '@angular/core';
import { NorthwindService } from '../services/northwind.service';

@Component({
  selector: 'app-view1',
  templateUrl: './view1.component.html',
  styleUrls: ['./view1.component.scss']
})
export class View1Component implements OnInit {
  public northwindCategories: any[] = [];

  constructor(
    private northwindService: NorthwindService,
  ) {}

  ngOnInit() {
    this.northwindCategories = this.northwindService.getData('Categories');
  }
}
