/**
 * Root Component Class
 * Author:Rahi Akela
 * Date  :10/04/2017
 * Description:An Angular component is responsible for managing a template and providing it with the data and logic it needs.
 * */
import { ApplicationRef, Component } from '@angular/core';
import { ProductRepository } from './model/product.repository';
import { Product } from './model/product.model';

@Component({
  selector: 'app',
  templateUrl: './template.html'
})
export class ProductComponent  {
  repository: ProductRepository= new ProductRepository();
  targetName: string = 'Kayak';
  counter: number = 1;

  constructor(ref: ApplicationRef) {
    (<any>window).appRef = ref;
    (<any>window).repository = this.repository;
  }

  getProductByPosition(position: number): Product {
    return this.repository.getProducts()[position];
  }

  getProduct(key: number): Product {
    return this.repository.getProduct(key);
  }

  getProducts(): Product[] {
    return this.repository.getProducts();
  }

  getProductCount(): number {
    return this.getProducts().length;
  }

  getKey(index: number, product: Product) {
    return product.id;
  }

  get nextProduct(): Product {
    return this.repository.getProducts().shift();
  }

  getProductPrice(index: number) : number {
    return Math.floor(this.getProduct(index).price);
  }
}
