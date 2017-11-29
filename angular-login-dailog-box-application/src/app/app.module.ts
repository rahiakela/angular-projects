import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {LoginComponent} from './login-component';
import {PrivateComponent} from './private-component';
import {routing} from './app.routes';

@NgModule({
  imports:      [ BrowserModule, routing ],
  declarations: [ AppComponent, LoginComponent, PrivateComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
