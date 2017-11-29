import {Component, Input, ViewChildren, QueryList} from '@angular/core';
import {ProductRepository} from '../model/product.repository';
import {Product} from '../model/product.model';
import {PaCellColor} from '../directives/cell-color-directive';

@Component({
    selector: 'paProductTable',
    templateUrl: "./product-table-template.html"
})
export class ProductTableComponent {

    @Input('model')
    dataModel: ProductRepository;

    @ViewChildren(PaCellColor)
    viewChildren: QueryList<PaCellColor>;

    showTable: boolean = true;

    getProduct(key: number): Product {
        return this.dataModel.getProduct(key);
    }

    getProducts(): Product[] {
        return this.dataModel.getProducts();
    }

    deleteProduct(key: number) {
        this.dataModel.deleteProduct(key);
    }

    ngAfterViewInit() {
        this.viewChildren.changes.subscribe(() => {
            this.updateViewChildren();
        });

        this.updateViewChildren();
    }

    private updateViewChildren() {
        setTimeout(() => {
            this.viewChildren.forEach((child, index) => {
                child.setColor(index % 2 ? true : false);
            })
        }, 0);
    }
}