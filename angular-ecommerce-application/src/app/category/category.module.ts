import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {CategoryCardComponent} from './category-card.component';
import {CategorySlideComponent} from './category-slide.component';
import {FormsModule} from '@angular/forms';
import {CategoryListComponent} from './category-list.component';
import {CategoryService} from './category.service';
import {CategoryTitlePipe} from './category.pipe';

@NgModule({
    imports: [CommonModule, RouterModule, FormsModule],
    declarations: [CategoryCardComponent, CategorySlideComponent, CategoryListComponent, CategoryTitlePipe],
    exports: [CategoryCardComponent, CategorySlideComponent, CategoryListComponent, CategoryTitlePipe],
    providers: [CategoryService]
})
export class CategoryModule {

}
