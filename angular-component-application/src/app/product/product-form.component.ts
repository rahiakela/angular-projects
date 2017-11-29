import {Component, EventEmitter, Output, ViewEncapsulation} from '@angular/core';
import {Product} from '../model/product.model';
import {ProductFormGroup} from '../form.model';

@Component({
    selector: 'paProductForm',
    templateUrl: './product-form-template.html',
    styleUrls: ['./product-form-component.css'],
    encapsulation: ViewEncapsulation.Emulated   
})
export class ProductFormComponent {
    form: ProductFormGroup = new ProductFormGroup();
    newProduct: Product = new Product();
    formSubmitted: boolean = false;

    @Output("paNewProduct")
    newProductEvent = new EventEmitter<Product>();

    submitForm(form: any) {
        this.formSubmitted = true;
        if (form.valid) {
            this.newProductEvent.emit(this.newProduct);
            this.newProduct = new Product();
            this.form.reset();
            this.formSubmitted = false;
        }
    }

}