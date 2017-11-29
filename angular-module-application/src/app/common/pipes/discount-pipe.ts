import {Pipe, Injectable, PipeTransform} from '@angular/core';
import {DiscountService} from '../services/discount-service';

@Pipe({
    name: 'discount',
    pure: false
})
export class PaDiscountPipe implements PipeTransform {

    constructor(private discountService: DiscountService) {}

    transform(price: number): number {
        if (price > 100) {
          console.log(`Large price discounted:${price}`);
        }
        return this.discountService.applyDiscount(price);
    }
}
