import {NgModule} from '@angular/core';
import {TableComponent} from './table/table.component';
import {FormComponent} from './form/form.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {ModelModule} from '../model/model.module';
// import {SharedState, SHARED_STATE, MODES} from './shared-state-model';
import {Subject} from 'rxjs/Subject';
import {StatePipe} from './state.pipe';
import {MessageModule} from '../message/message.module';
import {MessageService} from '../message/message.service';
import {ProductRepository} from '../model/product.repository';
import {RouterModule} from '@angular/router';
import { ProductCountComponent } from './product-count.component';
import { CategoryCountComponent } from './category-count.component';
import {NotFoundComponent} from './not-found-component';
import {UnsavedGuard} from '../routes/unsaved-guard';

@NgModule({
  imports: [
    BrowserModule,  
    FormsModule,
    RouterModule,
    ModelModule,
    MessageModule
  ],
  declarations: [
    TableComponent,
    FormComponent,
    StatePipe,
    ProductCountComponent,
    CategoryCountComponent,
    NotFoundComponent
  ],
  exports: [
    ModelModule,
    TableComponent,
    FormComponent
  ],
  providers: [UnsavedGuard]
  // providers: [
  //  {
  //    provide: SHARED_STATE,
  //    deps: [MessageService, ProductRepository],
  //    useFactory: (messageService, repository) => {
  //      const subject = new Subject<SharedState>();

  //      return subject;
  //    }
  //  }
  // ]
})
export class CoreModule { }
