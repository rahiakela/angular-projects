import {Component, Input} from '@angular/core';
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

    showTable: boolean = true;

    dateObject: Date = new Date(2020, 1, 20);
    dateString: string = '2020-02-20T00:00:00.000Z';
    dateNumber: number = 1582156800000;

    getProduct(key: number): Product {
        return this.dataModel.getProduct(key);
    }

    getProducts(): Product[] {
        return this.dataModel.getProducts();
    }

    deleteProduct(key: number) {
        this.dataModel.deleteProduct(key);
    }

}