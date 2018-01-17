import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../service/messages.service';
import { ThreadsService } from '../service/threads-service.service';
import { Message } from '../model/message-model';
import { Thread } from '../model/thread-model';
import * as _ from 'lodash';

@Component({
  selector: 'app-chat-nav-bar',
  templateUrl: './chat-nav-bar.component.html',
  styleUrls: ['./chat-nav-bar.component.css']
})
export class ChatNavBarComponent implements OnInit {

  unreadMessagesCount: number;

  constructor(public messagesService: MessagesService, public threadsService: ThreadsService) { }

  ngOnInit(): void {
    this.messagesService.messages.combineLatest(this.threadsService.currentThread, (messages: Message[], currentThread: Thread) => [currentThread, messages])
                                 .subscribe(([currentThread, messages]: [Thread, Message[]]) => {
                                   this.unreadMessagesCount = _.reduce(messages, (sum: number, m: Message) => {
                                     const messageIsInCurrentThread: boolean = m.thread && currentThread && (currentThread.id === m.thread.id);
                                     // note: in a "real" app you should also exclude messages that were authored by the current user b/c they've already been "read"
                                     if (m && !m.isRead && !messageIsInCurrentThread) {
                                       sum = sum + 1;
                                     }

                                     return sum;
                                   }, 0);
                                 });
  }

}
