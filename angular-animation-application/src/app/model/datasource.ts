/**
 * Data Source Class
 * Author:Rahi Akela
 * Date  :10/04/2017
 * Description:The data source provides the application with the data. The most common type of data source
 * uses HTTP to request data from a server
 * */
import {Product} from './product.model';
import {Injectable} from '@angular/core';

@Injectable()
export class DataSource {
    private data: Product[];

    constructor() {
        this.data = new Array<Product>(
            new Product(1, 'Kayak', 'Watersports', 275),
            new Product(2, 'Lifejacket', 'Watersports', 48.95),
            new Product(3, 'Soccer Ball', 'Soccer', 19.50),
            new Product(4, 'Corner Flags', 'Soccer', 34.95),
            new Product(5, 'Thinking Cap', 'Chess', 16)
        );
    }

    getData(): Product[] {
        return this.data;
    }
}
