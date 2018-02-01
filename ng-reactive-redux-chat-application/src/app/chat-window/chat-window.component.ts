import { Component, OnInit, Inject, ElementRef } from '@angular/core';
import { Thread } from '../model/thread-model';
import { User } from '../model/user-model';
import { Store } from 'redux';
import { AppState } from '../app.reducer';
import { AppStore } from '../app.store';
import { getCurrentThread } from '../thread/threads.reducer';
import { getCurrentUser } from '../user/users.reducer';
import * as ThreadActions from "../thread/thread.actions";

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css']
})
export class ChatWindowComponent implements OnInit {

  currentThread: Thread;
  draftMessage: {text: string};
  currentUser: User;

  constructor(@Inject(AppStore) private store: Store<AppState>, private el: ElementRef) {
    store.subscribe(() => this.updateState());
    this.updateState();
    this.draftMessage = {text: ''};
  }

  updateState() {
    const state = this.store.getState();
    this.currentThread = getCurrentThread(state);
    this.currentUser = getCurrentUser(state);
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    const scrollPane: any = this.el.nativeElement.querySelector('.msg-container-base');
    if (scrollPane) {
      setTimeout(() => scrollPane.scrollTop = scrollPane.scrollHeight, 0);
    }
  }

  sendMessage(): void {
    this.store.dispatch(ThreadActions.addMessage(this.currentThread, {author: this.currentUser, isRead: true, text: this.draftMessage.text}));
    this.draftMessage = {text: ''};
  }

  onEnter(event: any): void {
    this.sendMessage();
    event.preventDefault();
  }

  ngOnInit() {
  }

}
