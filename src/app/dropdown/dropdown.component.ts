import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  items = [
    { content: 'one' },
    { content: 'two' },
    { content: 'three' },
    { content: 'four' }
  ];


  constructor() { }

  ngOnInit() {
  }

}
