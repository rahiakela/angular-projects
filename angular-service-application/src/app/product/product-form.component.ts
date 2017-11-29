import {Component, EventEmitter, Output} from '@angular/core';
import {Product} from '../model/product.model';
import {ProductRepository} from '../model/product.repository';
import {ProductFormGroup} from '../form.model';

@Component({
    selector: 'paProductForm',
    templateUrl: './product-form-template.html'
})
export class ProductFormComponent {
    form: ProductFormGroup = new ProductFormGroup();
    newProduct: Product = new Product();
    formSubmitted: boolean = false;

    //@Output("paNewProduct")
    //newProductEvent = new EventEmitter<Product>();

    constructor(private repository: ProductRepository) {}

    submitForm(form: any) {
        this.formSubmitted = true;
        if (form.valid) {
            //this.newProductEvent.emit(this.newProduct);
            this.repository.saveProduct(this.newProduct);
            this.newProduct = new Product();
            this.form.reset();
            this.formSubmitted = false;
        }
    }

}