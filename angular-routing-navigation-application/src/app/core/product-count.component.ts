import { Component, OnInit, KeyValueDiffer, KeyValueDiffers, ChangeDetectorRef } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductRepository} from '../model/product.repository';

@Component({
  selector: 'app-product-count',
  template: `<div class="bg-info p-a-1">There are {{count}} products.</div>`
})
export class ProductCountComponent implements OnInit {

  private differ : KeyValueDiffer<any, any>;
  count : number = 0;
  private category: string;

  constructor(private repository: ProductRepository, private keyValueDiffers: KeyValueDiffers, private changeDetector: ChangeDetectorRef, activeRoute: ActivatedRoute) { 
    activeRoute.pathFromRoot.forEach(route => route.params.subscribe(params =>{
      if(params['category'] != null) {
        this.category = params['category'];
        this.updateCount();
      }
    }));
  }

  ngOnInit() {
    this.differ = this.keyValueDiffers
          .find(this.repository.getProducts())
          .create(this.changeDetector);
  }

  ngDoCheck() {
    if(this.differ.diff(this.repository.getProducts()) != null) {
      this.updateCount();
    }
  }

  private updateCount() {
    this.count = this.repository.getProducts()
                        .filter(p => this.category == null || p.category == this.category)                    
                        .length;
  }
}
