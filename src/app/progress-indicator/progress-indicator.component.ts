import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-indicator',
  templateUrl: './progress-indicator.component.html',
  styleUrls: ['./progress-indicator.component.css']
})
export class ProgressIndicatorComponent implements OnInit {

  steps = [
        {
          text: 'First step',
          state: ['complete'],
        },
        {
          text: 'Second step',
          state: ['current'],
        },
        {
          text: 'Third step',
          state: ['incomplete'],
        },
        {
          text: 'Fourth step',
          state: ['incomplete', 'error'],
        },
        {
          text: 'Fifth step',
          state: ['incomplete'],
          disabled: true,
        },
      ];

  constructor() { }

  ngOnInit() {
  }

}