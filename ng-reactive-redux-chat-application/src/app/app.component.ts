import { Component, Inject } from '@angular/core';
import { Store } from 'redux';
import { AppState } from './app.reducer';
import { ChatExampleData } from './data/chat-example-data';
import { AppStore } from './app.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(@Inject(AppStore) private store: Store<AppState>) {
    ChatExampleData(store);
  }
}
