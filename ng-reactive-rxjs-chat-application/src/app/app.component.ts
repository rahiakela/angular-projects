import { Component } from '@angular/core';
import { MessagesService } from './service/messages.service';
import { ThreadsService } from './service/threads-service.service';
import { UsersService } from './service/users.service';
import { ChatExampleData } from './data/chat-example-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(public messagesService: MessagesService, public threadsService: ThreadsService, public usersService: UsersService) {
    ChatExampleData.init(messagesService, threadsService, usersService);
  }
}
