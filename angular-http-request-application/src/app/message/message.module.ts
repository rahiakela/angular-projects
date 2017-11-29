import { NgModule, ErrorHandler } from '@angular/core';
import { MessageComponent } from './components/message.component';
import {BrowserModule} from '@angular/platform-browser';
import {MessageService} from './message.service';
import {MessageErrorHandler} from "./error-handler";

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [MessageComponent],
  exports: [MessageComponent],
  providers: [
    MessageService,
    {provide: ErrorHandler, useClass: MessageErrorHandler}
  ]
})
export class MessageModule { }
