import {Component} from '@angular/core';
import {ProductRepository} from '../../model/product.repository';
import {Product} from '../../model/product.model';

@Component({
    selector: 'paProductTable',
    templateUrl: './product-table-template.html'
})
export class ProductTableComponent {

  showTable = true;

  dateObject: Date = new Date(2020, 1, 20);
  dateString = '2020-02-20T00:00:00.000Z';
  dateNumber = 1582156800000;

  constructor(private productRepository: ProductRepository) {}

  getProduct(key: number): Product {
    return this.productRepository.getProduct(key);
  }

  getProducts(): Product[] {
    return this.productRepository.getProducts();
  }

  deleteProduct(key: number) {
    this.productRepository.deleteProduct(key);
  }

}
