import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductRepository} from '../../model/product.repository';
// import {SharedState, MODES, SHARED_STATE} from '../shared-state-model';
import {Product} from '../../model/product.model';
// import {Observer} from 'rxjs/Observer';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  category: string = null;

  constructor(private productRepository: ProductRepository, private activeRoute: ActivatedRoute) {
    activeRoute.params.subscribe(params => {
      this.category = params['category'] || null;
    });
   }
  // constructor(private productRepository: ProductRepository, @Inject(SHARED_STATE) private observer: Observer<SharedState>) { }

  getProduct(key: number): Product {
    return this.productRepository.getProduct(key);
  }

  getProducts(): Product[] {
    return this.productRepository.getProducts()
                  .filter(p => this.category == null || p.category == this.category);
  }

  get categories(): string[] {
    return this.productRepository.getProducts()
                  .map(p => p.category)
                  .filter((category, index, array) => array.indexOf(category) == index);
  }

  deleteProduct(key: number) {
    this.productRepository.deleteProduct(key);
  }

  // editProduct(key: number) {
    // this.observer.next(new SharedState(MODES.EDIT, key));
  // }

  // createProduct() {
    // this.observer.next(new SharedState(MODES.CREATE));
  // }

  ngOnInit() {
  }

}
