/**
 * Root Module
 * Author:Rahi Akela
 * Date  :10/04/2017
 * Description:Every project has a root module, which is responsible for describing the application to Angular.
 * */
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ProductComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ ProductComponent ],
  bootstrap:    [ ProductComponent ]
})
export class AppModule { }
