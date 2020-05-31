import { Component, OnInit } from '@angular/core';
import { map, mergeMap } from 'rxjs/operators';

import { UserService } from '../shared/services';
import { ListItem } from 'carbon-components-angular';

@Component({
  selector: 'app-combobox',
  templateUrl: './combobox.component.html',
  styleUrls: ['./combobox.component.scss']
})
export class ComboboxComponent implements OnInit {
  items: Array<ListItem> = [];

  ngOnInit() {}

  constructor(private userService: UserService) {}

  onEnter(e) {
    const keyword = e.target.classList.contains('bx--text-input') ? e.target.value.trim() : '';
    if (!keyword) {
      return;
    }
    this.userService.getNames(keyword).subscribe(
      res => {
        const suggestions = [];
        res.forEach(item => {
          suggestions.push({ content: item.name });
        });
        this.items = suggestions;
      },
      err => {
        console.log('HTTP Error', err);
      }
    );
  }

  onSelected(selectedItem: ListItem) {
    console.log(selectedItem);
  }
}
