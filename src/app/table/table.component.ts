import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { Observable } from "rxjs";
import { finalize } from "rxjs/operators";
import { Table, TableModel, TableItem, TableHeaderItem } from 'carbon-components-angular';
import { UserService } from '../shared/services';
import { User } from "../shared/models";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  usersModel = new TableModel();
  isLoading: boolean;
  @ViewChild('commentCellTmpl', { static: true }) protected commentCell: TemplateRef<any>;


  constructor(private userService: UserService) { }

  ngOnInit() {
    this.isLoading = true;
    this.usersModel.header = [
      new TableHeaderItem({ data: 'Name' }),
      new TableHeaderItem({ data: 'Email', className: 'aa bb' }),
      new TableHeaderItem({ data: 'Address' }),
      new TableHeaderItem({ data: 'Comment' })
    ];

    this.userService.getNames()
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe(
        res => {
          this.renderTable(res);
        },
        err => {
          console.log('HTTP Error', err);
        }
    );
  }

  renderTable(users: User[]) {
    const modelData = [];
    for (const user of users) {
      modelData.push([
        new TableItem({ data: user.name }),
        new TableItem({ data: user.email }),
        new TableItem({ data: user.address.city }),
        new TableItem({ data: { val: '' }, template: this.commentCell })
      ]);
    }
    this.usersModel.data = modelData;
  }

  customSort(index: number) {
    if (this.usersModel.header[index].sorted) {
      // if already sorted flip sorting direction
      this.usersModel.header[index].ascending = this.usersModel.header[index].descending;
    }
    this.usersModel.sort(index);
  }

  getFirstComment() {
    // 得到第一行，第四列的注释内容（不考虑复选框列）
    let comments = '';
    this.usersModel.data.forEach((row, index) => {
      if (this.usersModel.rowsSelected[index]) {
        comments += this.usersModel.data[index][3].data.val.trim() + '/';
      }
    });
    alert(comments);
  }

}