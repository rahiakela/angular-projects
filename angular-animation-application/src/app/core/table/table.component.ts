import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductRepository} from '../../model/product.repository';
import {Product} from '../../model/product.model';
import { HighlightTrigger } from "../table-animations";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  animations: [HighlightTrigger]
})
export class TableComponent implements OnInit {
  category: string = null;
  highlightCategory: string = '';

  constructor(private productRepository: ProductRepository, private activeRoute: ActivatedRoute) {
    activeRoute.params.subscribe(params => {
      this.category = params['category'] || null;
    });
   }

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

  getRowState(category: string): string {
    return this.highlightCategory == '' ? '' : this.highlightCategory == category ? 'selected' : 'notselected';
  }

  ngOnInit() {
  }

}
