import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductRepository} from './product.repository';
import {DataSource} from './datasource';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    ProductRepository,
    DataSource
  ]
})
export class ModelModule { }
