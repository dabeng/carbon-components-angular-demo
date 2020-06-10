import { Component, OnInit } from '@angular/core';
import { PaginationModel } from 'carbon-components-angular';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  pagiModel = new PaginationModel();

  constructor() { }

  ngOnInit() {
    this.pagiModel.pageLength = 10;
    this.pagiModel.currentPage = 1;
    this.pagiModel.totalDataLength = 101;
  }

  selectPage(pageNumber: number) {
    this.pagiModel.currentPage = pageNumber;
  }

}
