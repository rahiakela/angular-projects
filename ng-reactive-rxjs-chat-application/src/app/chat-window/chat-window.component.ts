import { Component, OnInit, ChangeDetectionStrategy, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Thread } from '../model/thread-model';
import { Message } from '../model/message-model';
import { User } from '../model/user-model';
import { MessagesService } from '../service/messages.service';
import { ThreadsService } from '../service/threads-service.service';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatWindowComponent implements OnInit {

  messages: Observable<any>;
  currentThread: Thread;
  draftMessage: Message;
  currentUser: User;

  constructor(public messagesService: MessagesService, 
              public threadsService: ThreadsService,
              public usersService: UsersService,
              public el: ElementRef) { }

  ngOnInit(): void {
    this.messages = this.threadsService.currentThreadMessages;

    this.draftMessage = new Message();

    this.threadsService.currentThread.subscribe((thread: Thread) => {
      this.currentThread = thread;
    });

    this.usersService.currentUser.subscribe((user: User) => {
      this.currentUser = user;
    });

    this.messages.subscribe((messages: Array<Message>) => {
      setTimeout(() => {
        this.scrollToBottom();
      },0);
    });
  }

  sendMessage(): void {
    const m: Message = this.draftMessage;
    m.author = this.currentUser;
    m.thread = this.currentThread;
    m.isRead = true;
    this.messagesService.addMessage(m);
    this.draftMessage = new Message();
  }

  onEnter(event: any): void {
    this.sendMessage();
    event.preventDefault();
  }

  scrollToBottom(): void {
    const scrollPane: any = this.el.nativeElement.querySelector('.msg-container-base');
    scrollPane.scrollTop = scrollPane.scrollHeight;
  }
}
