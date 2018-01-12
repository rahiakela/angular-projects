import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ThreadsService } from '../service/threads-service.service';

@Component({
  selector: 'app-chat-threads',
  templateUrl: './chat-threads-component.html',
  styleUrls: ['./chat-threads-component.css']
})
export class ChatThreadsComponent implements OnInit {

  threads: Observable<any>;

  constructor(public threadsService: ThreadsService) { 
    this.threads = threadsService.orderedThreads;
  }

  ngOnInit() {
  }

}
