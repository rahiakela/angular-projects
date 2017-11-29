import {NgModule} from '@angular/core';
import {ProductRepository} from './product.repository';
import {RestDataSource, REST_URL} from './rest-datasource';
import {HttpModule, JsonpModule} from '@angular/http';
import {ModelResolver} from './model-resolver';


@NgModule({
  imports: [
    HttpModule,
    JsonpModule
  ],
  declarations: [],
  providers: [
    ProductRepository,
    RestDataSource,
    ModelResolver,
    {provide: REST_URL, useValue: `http://${location.hostname}:3500/products`}
  ]
})
export class ModelModule { }
