import {Component} from '@angular/core';
import {Cart, CartService} from './cart.service';

@Component({
    selector: 'db-cart-menu',
    templateUrl: './cart-menu.component.html'
})
export class CartMenuComponent {

    private cart: Cart;

    constructor(private cartService: CartService) {
        this.cart = this.cartService.cart;
    }
}
