/**
 * Model Repository Class
 * Author:Rahi Akela
 * Date  :10/04/2017
 * Description:The repository will provide access to the data from the data source and allow it to be manipulated in the application
 * */
import {Product} from './product.model';
import {DataSource} from './datasource';

export class ProductRepository {

    private dataSource: DataSource;
    private products: Product[];
    private locator= (p: Product, id: number) => p.id === id;

    constructor() {
        this.dataSource = new DataSource();
        this.products = new Array<Product>();
        this.dataSource.getData().forEach(p => this.products.push(p));
    }

    getProducts(): Product[] {
        return this.products;
    }

    getProduct(id: number): Product {
        return this.products.find(p => this.locator(p, id));
    }

    saveProduct(product: Product) {
        if (product.id === 0 || product.id == null) {
            product.id = this.generateID();
            this.products.push(product);
        }else {
            let index = this.products.findIndex(p => this.locator(p, product.id));
            this.products.splice(index, 1, product);
        }
    }

    deleteProduct(id: number) {
        let index = this.products.findIndex(p => this.locator(p, id));
        if (index > -1) {
            this.products.splice(index, 1);
        }
    }

    swapProduct() {
        let p = this.products.shift();
        this.products.push(new Product(p.id, p.name, p.category, p.price));
    }

    private generateID(): number {
        let candidate = 100;
        while (this.getProduct(candidate) != null) {
            candidate++;
        }
        return candidate;
    }
}
