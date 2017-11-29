import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TableComponent} from './table/table.component';
import {FormComponent} from './form/form.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {ModelModule} from '../model/model.module';
import {SharedState, SHARED_STATE, MODES} from './shared-state-model';
import {Subject} from 'rxjs/Subject';
import {StatePipe} from './state.pipe';
import {MessageModule} from '../message/message.module';
import {MessageService} from '../message/message.service';
import {ProductRepository} from '../model/product.repository';
import {Message} from '../message/message.model';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ModelModule,
    MessageModule
  ],
  declarations: [
    TableComponent,
    FormComponent,
    StatePipe
  ],
  exports: [
    ModelModule,
    TableComponent,
    FormComponent
  ],
  providers: [
    {
      provide: SHARED_STATE,
      deps: [MessageService, ProductRepository],
      useFactory: (messageService, repository) => {
        const subject = new Subject<SharedState>();
        subject.subscribe(m => messageService.reportMessage(new Message(MODES[m.mode] + (m.id !== undefined ? ` ${repository.getProduct(m.id).name}` : ''))));

        return subject;
      }
    }
  ]
})
export class CoreModule { }
