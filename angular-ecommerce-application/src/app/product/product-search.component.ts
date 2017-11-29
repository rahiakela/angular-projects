import {Router} from '@angular/router';
import {Component} from '@angular/core';

@Component({
    selector: 'db-product-search',
    templateUrl: './product-search.component.html'
})
export class ProductSearchComponent {
    disabled: boolean = true;

    constructor(private router: Router) {}

    searchProduct(value: string) {
        this.router.navigate(['/products'], { queryParams: {search: value}});
    }

    searchChanged(value: string) {
        // Update the disabled property depends on value
        if (value) {
            this.disabled = false;
        }else {
            this.disabled = true;
        }
    }
}
