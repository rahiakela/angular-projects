import {Pipe, Injectable, PipeTransform} from '@angular/core';
import {DiscountService} from '../services/discount-service';
import {LogService} from '../services/log-service';

@Pipe({
    name: 'discount',
    pure: false
})
export class PaDiscountPipe implements PipeTransform {

    constructor(private discountService: DiscountService, private logger: LogService) {}

    transform(price: number): number {
        if (price > 100) {
          this.logger.logInfoMessage(`Large price discounted:${price}`);
        }
        return this.discountService.applyDiscount(price);
    }
}
