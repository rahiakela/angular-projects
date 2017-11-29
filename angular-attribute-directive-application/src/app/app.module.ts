/**
 * Root Module
 * Author:Rahi Akela
 * Date  :10/04/2017
 * Description:Every project has a root module, which is responsible for describing the application to Angular.
 * */
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PaAttrDirective} from './directives/attr. directive';
import {PaModel} from './directives/twoway.directive';

import { ProductComponent }  from './app.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [ ProductComponent, PaAttrDirective, PaModel ],
  bootstrap:    [ ProductComponent ]
})
export class AppModule { }
