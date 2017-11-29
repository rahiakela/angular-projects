import {Component} from '@angular/core';
import {Cart, CartService} from '../cart/cart.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'db-checkout-view',
    templateUrl: './checkout-view.component.html'
})
export class CheckoutViewComponent {

    private cart: Cart;
    form: FormGroup;

    constructor(private cartService: CartService, private formBuilder: FormBuilder) {
        this.cart = this.cartService.cart;
    }

    ngOnInit() {
        this.form = this.formBuilder.group({
            firstName:['', Validators.required],
            lastName:['', Validators.required],
            email:['', Validators.required],
            phone:['', Validators.required],
            address:[]
        });
    }

    submit() {
        alert('Submitted');
        this.cartService.clearCart();
    }
}