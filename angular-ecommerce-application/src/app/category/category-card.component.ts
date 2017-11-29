import { Component, Input } from '@angular/core';
import { Category } from './category.service';
import {Router} from '@angular/router';

@Component({
    selector: 'db-category-card',
    templateUrl: './category-card.component.html'
})
export class CategoryCardComponent {

    @Input()
    category: Category;

    constructor(private router: Router) {}

    filterProducts(category: Category) {
        this.router.navigate(['/products'], {queryParams: {category: category.id}});
    }
}
