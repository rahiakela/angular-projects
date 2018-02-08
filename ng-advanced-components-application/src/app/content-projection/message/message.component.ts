import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input()
  header: string;
  @HostBinding('attr.class')
  cssClass: string = 'ui message';

  constructor() { }

  ngOnInit() {
  }

}
