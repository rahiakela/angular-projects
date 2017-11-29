import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductRepository} from './product.repository';
import {DataSource} from './datasource';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    ProductRepository,
    DataSource
  ],
  declarations: []
})
export class ModelModule { }
