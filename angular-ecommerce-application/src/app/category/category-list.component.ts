import {Category} from './category.service';
import {Router} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {CategoryService} from './category.service';

@Component({
    selector: 'db-category-list',
    templateUrl: './category-list.component.html'
})
export class CategoryListComponent implements OnInit {

    categories: Category[] = [];

    constructor(private router: Router, private categoryService: CategoryService) {}

    ngOnInit(): void {
        this.categoryService.getCategories()
            .then((categories: Category[]) => this.categories = categories);
    }

    filterProducts(category: Category) {
        this.router.navigate(['/products'], { queryParams: { category : category.id}});
    }
}
