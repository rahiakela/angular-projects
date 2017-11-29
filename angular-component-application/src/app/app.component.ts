/**
 * Root Component Class
 * Author:Rahi Akela
 * Date  :10/04/2017
 * Description:An Angular component is responsible for managing a template and providing it with the data and logic it needs.
 * */
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductRepository } from './model/product.repository';
import {Product} from './model/product.model';
import {ProductFormGroup} from './form.model';

@Component({
  selector: 'app',
  templateUrl: './products-template.html',
  styles: ['/deep/ div {border: 2px black solid; font-style:italic}']
})
export class ProductComponent  {

  form: ProductFormGroup = new ProductFormGroup();
  repository: ProductRepository= new ProductRepository();

  selectedProduct: string;
  newProduct: Product = new Product();
  formSubmitted: boolean = false;
  showTable: boolean = true;

  submitForm(form: NgForm) {
    this.formSubmitted = true;
    if (form) {
      this.addProduct(this.newProduct);
      this.newProduct = new Product();
      form.reset();
      this.formSubmitted = false;
    }
  }

  getProduct(key: number): Product {
    return this.repository.getProduct(key);
  }

  getProducts(): Product[] {
    return this.repository.getProducts();
  }

  getSelected(product: Product): boolean {
    return product.name === this.selectedProduct;
  }

  get jsonProduct() {
    return JSON.stringify(this.newProduct);
  }

  addProduct(p: Product) {
    console.log('New Product:' + this.jsonProduct);
    this.repository.saveProduct(p);
  }

  deleteProduct(key: number) {
    this.repository.deleteProduct(key);
  }

}
