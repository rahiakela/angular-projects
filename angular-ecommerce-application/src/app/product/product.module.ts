import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {CategoryModule} from '../category/category.module';
import {ProductListComponent} from './product-list.component';
import {ProductCardComponent} from './product-card.component';
import {ProductGridComponent} from './product-grid.component';
import {ProductSearchComponent} from './product-search.component';
import {ProductService} from './product.service';
import {ProductViewComponent} from './product-view.component';

@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, CategoryModule],
    declarations: [ProductListComponent, ProductCardComponent, ProductGridComponent, ProductSearchComponent, ProductViewComponent],
    exports: [ProductListComponent, ProductCardComponent, ProductSearchComponent, ProductGridComponent, ProductViewComponent],
    providers: [ProductService]
})
export class ProductModule {

}