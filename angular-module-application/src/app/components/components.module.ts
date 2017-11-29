import { NgModule } from '@angular/core';
import {CommonModule} from '../common/common.module';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PaDiscountDisplayComponent} from './discount/discount-display-component';
import {PaDiscountEditorComponent} from './discount/discount-editor-component';
import {ProductFormComponent} from './product/product-form.component';
import {ProductTableComponent} from './product/product-table.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  declarations: [
    PaDiscountDisplayComponent,
    PaDiscountEditorComponent,
    ProductFormComponent,
    ProductTableComponent
  ],
  exports: [
    ProductTableComponent,
    ProductFormComponent
  ]
})
export class ComponentsModule { }
