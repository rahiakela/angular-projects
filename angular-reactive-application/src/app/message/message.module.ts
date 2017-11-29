import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageComponent } from './components/message.component';
import {BrowserModule} from '@angular/platform-browser';
import {MessageService} from './message.service';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule
  ],
  declarations: [MessageComponent],
  exports: [MessageComponent],
  providers: [MessageService]
})
export class MessageModule { }
