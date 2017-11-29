import { Component, OnInit, KeyValueDiffer, KeyValueDiffers, ChangeDetectorRef } from '@angular/core';
import {ProductRepository} from '../model/product.repository';

@Component({
  selector: 'app-category-count',
  template: `<div class="bg-primary p-a-1">There are {{count}} categories.</div>`
})
export class CategoryCountComponent implements OnInit {

  private differ: KeyValueDiffer<any, any>;
  count : number = 0;

  constructor(private repository: ProductRepository, private keyValueDiffers: KeyValueDiffers, private changeDetector: ChangeDetectorRef) { }

  ngOnInit() {
    this.differ = this.keyValueDiffers
            .find(this.repository.getProducts())
            .create(this.changeDetector);
  }

  ngDoCheck() {
    if(this.differ.diff(this.repository.getProducts()) != null) {
      this.count = this.repository.getProducts()
              .map(p => p.category)
              .filter((category, index, array) => array.indexOf(category) == index)
              .length;
    }
  }
}
