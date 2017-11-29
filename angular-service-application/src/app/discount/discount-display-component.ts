import {Component, Input} from '@angular/core';
import {DiscountService} from '../services/discount-service';

@Component({
    selector: 'paDiscountDisplay',
    template: `
        <div class="bg-info p-a-1">
            The discount is {{discountService.discount}}
        </div>
    `
})
export class PaDiscountDisplayComponent {

    constructor(private discountService: DiscountService) {}

}