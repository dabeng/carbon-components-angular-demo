import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-indicator',
  templateUrl: './progress-indicator.component.html',
  styleUrls: ['./progress-indicator.component.scss']
})
export class ProgressIndicatorComponent implements OnInit {

  steps = [
        {id: 's1',
          text: 'First step',
          state: ['complete'],
        },
        {id: 's2',
          text: 'Second step',
          state: ['current'],
        },
        {id: 's3',
          text: 'Third step',
          state: ['incomplete'],
        },
        {id: 's4',
          text: 'Fourth step',
          state: ['incomplete', 'error'],
        },
        {id: 's5',
          text: 'Fifth step',
          state: ['incomplete'],
          disabled: true,
        },
      ];

  constructor() { }

  ngOnInit() {
  }

}
