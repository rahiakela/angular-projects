import {Directive, HostBinding, Input, SimpleChange, KeyValueDiffer, KeyValueDiffers, ChangeDetectorRef} from '@angular/core';
import {DiscountService} from '../services/discount-service';

@Directive({
    selector: 'td[pa-price]',
    exportAs: 'discount'
})
export class PaDiscountAmountDirective {

    private differ: KeyValueDiffer<any, any>;

    constructor(private keyValueDiffers: KeyValueDiffers, private changeDetector: ChangeDetectorRef, private discountService: DiscountService) {

    }

    @Input('pa-price')
    originalPrice: number;

    discountAmount: number;

    ngOnInit() {
        this.differ = this.keyValueDiffers.find(this.discountService).create(this.changeDetector);
    }

    ngOnChanges(changes: {[property: string]: SimpleChange}) {
        if(changes['originalPrice'] != null) {
            this.updateValue();
        }
    }

    ngDoCheck() {
        if(this.differ.diff(this.discountService) != null) {
            this.updateValue();
        }
    }

    private updateValue() {
        this.discountAmount = this.originalPrice - this.discountService.applyDiscount(this.originalPrice);
    }
}