import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {ModelModule} from './model/model.module';
import {CoreModule} from './core/core.module';
import {MessageModule} from './message/message.module';
import {FormComponent} from './core/form/form.component';
import {MessageComponent} from './message/components/message.component';
import {TableComponent} from './core/table/table.component';

@NgModule({
  imports: [
    BrowserModule,
    ModelModule,
    CoreModule,
    MessageModule
  ],
  bootstrap: [
    TableComponent,
    FormComponent,
    MessageComponent
  ]
})
export class AppModule { }
