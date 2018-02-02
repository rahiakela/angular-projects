import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-native-encapsulation',
  templateUrl: './native-encapsulation.component.html',
  styles: [`
    .highlight {
      text-align: center;
      border: 2px solid black;
      border-radius: 3px;
      margin-botton: 20px;
    }
  `],
  encapsulation: ViewEncapsulation.Native
})
export class NativeEncapsulationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
