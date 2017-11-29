/**
 * Model Repository Class
 * Author:Rahi Akela
 * Date  :10/04/2017
 * Description:The repository will provide access to the data from the data source and allow it to be manipulated in the application
 * */
import {Product} from './product.model';
import {RestDataSource} from './rest-datasource';
import {Injectable} from '@angular/core';

@Injectable()
export class ProductRepository {

    private products: Product[] = new Array<Product>();
    private locator= (p: Product, id: Number) => p.id === id;

    constructor(private dataSource: RestDataSource) {
        this.dataSource.getData().subscribe(data => this.products = data);
    }

    getProducts(): Product[] {
        return this.products;
    }

    getProduct(id: Number): Product {
        return this.products.find(p => this.locator(p, id));
    }

    saveProduct(product: Product) {
        if (product.id === 0 || product.id == null) {
            this.dataSource.saveProduct(product).subscribe(p => this.products.push(p));
        }else {
            this.dataSource.updateProduct(product).subscribe(p => {
              const index = this.products.findIndex(p => this.locator(p, product.id));
              this.products.splice(index, 1, p);
            });
        }
    }

    deleteProduct(id: number) {
      this.dataSource.deleteProduct(id).subscribe(() => {
        const index = this.products.findIndex(p => this.locator(p, id));
        if (index > -1) {
          this.products.splice(index, 1);
        }
      });
    }

    private generateID(): number {
        let candidate = 100;
        while (this.getProduct(candidate) != null) {
            candidate++;
        }
        return candidate;
    }
}
