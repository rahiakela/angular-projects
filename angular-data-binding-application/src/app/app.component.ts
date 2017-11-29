/**
 * Root Component Class
 * Author:Rahi Akela
 * Date  :10/04/2017
 * Description:An Angular component is responsible for managing a template and providing it with the data and logic it needs.
 * */
import { Component } from '@angular/core';
import { ProductRepository } from './model/product.repository';

@Component({
  selector: 'app',
  templateUrl: './template.html'
})
export class ProductComponent  {
  repository: ProductRepository= new ProductRepository();

  getClasses(key: number): string {
    let product = this.repository.getProduct(key);
    return 'p-a-1 ' + (product.price < 50 ? 'bg-info' : 'bg-warning');
  }

  getClassMap(key: number): Object {
    let product = this.repository.getProduct(key);
    return {
      'text-xs-center bg-danger' : product.name === 'Kayak',
      'bg-info' : product.price < 50
    };
  }
}
