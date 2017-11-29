/**
 * Root Module
 * Author:Rahi Akela
 * Date  :10/04/2017
 * Description:Every project has a root module, which is responsible for describing the application to Angular.
 * */
import { NgModule, LOCALE_ID }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PaAttrDirective} from './directives/attr. directive';
import {PaModel} from './directives/twoway.directive';
import {PaStructureDirective} from './directives/structure.directive';
import {PaIteratorDirective} from './directives/iterator.directive';
import {PaCellColor} from './directives/cell-color-directive';
import {PaCellColorSwitcher} from './directives/cell-color-switcher-directive';
import {ProductTableComponent} from './product/product-table.component';
import {ProductFormComponent} from './product/product-form.component';
import { ProductComponent }  from './app.component';
import {PaToggleView} from './toggle-view-component';
import {PaAddTaxPipe} from './pipes/addTax-pipe';
import {PaCategoryFilterPipe} from './pipes/category-filter-pipe';
import {PaDiscountDisplayComponent} from './discount/discount-display-component';
import {PaDiscountEditorComponent} from './discount/discount-editor-component';
import {DiscountService} from './services/discount-service';
import {PaDiscountPipe} from './pipes/discount-pipe';
import {PaDiscountAmountDirective} from './directives/discount-amount-directive';
import {DataSource} from './model/datasource';
import {ProductRepository} from './model/product.repository';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    ReactiveFormsModule
  ],
  declarations: [ 
    ProductComponent, 
    PaAttrDirective, 
    PaModel, 
    PaStructureDirective, 
    PaIteratorDirective, 
    PaCellColor,
    PaCellColorSwitcher, 
    ProductFormComponent, 
    ProductTableComponent, 
    PaToggleView,
    PaAddTaxPipe,
    PaCategoryFilterPipe,
    PaDiscountDisplayComponent,
    PaDiscountEditorComponent,
    PaDiscountPipe,
    PaDiscountAmountDirective
  ],
  providers:[DiscountService, DataSource, ProductRepository],
  bootstrap:    [ ProductComponent ]
})
export class AppModule { }
