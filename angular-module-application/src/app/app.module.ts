/**
 * Root Module
 * Author:Rahi Akela
 * Date  :10/04/2017
 * Description:Every project has a root module, which is responsible for describing the application to Angular.
 * */
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ProductComponent} from './app.component';
import {PaToggleView} from './toggle-view-component';
import {ModelModule} from './model/model.module';
import {CommonModule} from './common/common.module';
import {ComponentsModule} from './components/components.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    ModelModule,
    CommonModule,
    ComponentsModule
  ],
  declarations: [
    ProductComponent,
    PaToggleView,
  ],
  bootstrap: [ ProductComponent]
})
export class AppModule { }
