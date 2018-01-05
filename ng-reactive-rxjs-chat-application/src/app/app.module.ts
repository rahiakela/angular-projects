import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MessagesService } from './service/messages.service';
import { ThreadsService } from './service/threads.service';
import { UsersService } from './service/users.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    MessagesService,
    ThreadsService,
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
