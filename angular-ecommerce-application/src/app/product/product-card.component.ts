import {Product} from './product.service';
import {Component, Input, EventEmitter, Output} from '@angular/core';

@Component({
    selector: 'db-product-card',
    templateUrl: './product-card.component.html'
})
export class ProductCardComponent {

    @Input()
    products: Product[];
    @Output()
    addToCart: EventEmitter<Product> = new EventEmitter<Product>();

    setClasses(product: Product) {
        return {
            'card-danger': product.isSpecial,
            'card-inverse': product.isSpecial
        };
    }

    buy(product: Product) {
        console.log('We bought ', product.title);
        this.addToCart.emit(product);
    }
}