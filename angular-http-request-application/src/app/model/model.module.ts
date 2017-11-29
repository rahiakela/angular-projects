import {NgModule} from '@angular/core';
import {ProductRepository} from './product.repository';
import {RestDataSource, REST_URL} from './rest-datasource';
import {HttpModule, JsonpModule} from '@angular/http';


@NgModule({
  imports: [
    HttpModule,
    JsonpModule
  ],
  declarations: [],
  providers: [
    ProductRepository,
    RestDataSource,
    {provide: REST_URL, useValue: `http://${location.hostname}:3500/products`}
  ]
})
export class ModelModule { }
