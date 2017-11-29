import { Component, OnInit } from '@angular/core';
import {Message} from '../message.model';
import {MessageService} from '../message.service';
import {Router, NavigationEnd, NavigationCancel} from '@angular/router';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  lastMessage: Message;

  constructor(private messageService: MessageService, private router: Router) {
    messageService.messages.subscribe(m => this.lastMessage = m);
    this.router.events.filter(e => e instanceof NavigationEnd || e instanceof NavigationCancel)
                      .subscribe(e => this.lastMessage = null);
  }

  ngOnInit() {
  }

}
