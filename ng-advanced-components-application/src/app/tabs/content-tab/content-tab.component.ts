import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content-tab',
  templateUrl: './content-tab.component.html',
  styleUrls: ['./content-tab.component.css']
})
export class ContentTabComponent implements OnInit {

  @Input()
  title: string;
  active = false;
  name: string;

  constructor() { }

  ngOnInit() {
  }

}
