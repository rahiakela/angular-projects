import {Pipe, Injectable} from '@angular/core';
import {DiscountService} from '../services/discount-service';

@Pipe({
    name: 'discount',
    pure: false
})
export class PaDiscountPipe {
    
    constructor(private discountService: DiscountService) {}

    transform(price: number): number {
        return this.discountService.applyDiscount(price);
    }
}