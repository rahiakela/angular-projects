import {Component, OnInit} from '@angular/core';
import {Category, CategoryService} from '../category/category.service';

@Component({
    selector: 'db-welcome',
    templateUrl: './welcome.component.html'
})
export class WelcomeComponent implements OnInit {

    // Slide Categories
    slideCategories: Category[];

    // Card categories
    cardCategories: Category[];

    constructor(private categoryService: CategoryService) {}

    ngOnInit(): void {
        this.categoryService.getCategories().then((categories: Category[]) => {
            this.cardCategories = categories;

            this.slideCategories = [
                categories[0],
                categories[1],
                categories[2]
            ];
        });
    }

    selectCategory(category: Category) {
        console.log('Selected category ', category.title);
    }
}
