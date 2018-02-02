import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-no-encapsulation',
  templateUrl: './no-encapsulation.component.html',
  styles: [`
    .highlight {
      border: 2px dashed red;
      text-align: center;
      margin-bottom: 20px;
    }
  `],
  encapsulation: ViewEncapsulation.None
})
export class NoEncapsulationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
