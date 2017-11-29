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
  templateUrl: './form-validate-template3.html'
})
export class ProductComponent  {

  form: ProductFormGroup = new ProductFormGroup();
  repository: ProductRepository= new ProductRepository();

  selectedProduct: string;
  newProduct: Product = new Product();
  formSubmitted: boolean = false;

  submitForm(form: NgForm) {
    this.formSubmitted = true;
    if(form) {
      this.addProduct(this.newProduct);
      this.newProduct=new Product();
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
  }

/*
  getFormValidationMessages(form: NgForm): string[] {
    let messages: string[] = [];
    Object.keys(form.controls).forEach(k => {
      this.getValidationMessages(form.controls[k],k)
          .forEach(m => messages.push(m));
    });
    return messages;
  }

  getValidationMessages(state: any, thingName?: string): string[] {
    let thing: string = state.path || thingName;
    let messages: string[] = [];
    if(state.errors) {
      for(let erroName in state.errors) {
        switch (erroName) {
          case 'required' :
            messages.push(`You must enter a ${thing}`);
            break;
          case 'minlength' :
            messages.push(`A ${thing} must be at least ${state.errors['minlength'].requiredLength} characters`);
            break;
          case 'pattern' :
            messages.push(`The ${thing} contains illegal characters`);
            break;
        }
      }
    }
    return messages;
  }*/
}
