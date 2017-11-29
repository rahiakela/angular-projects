import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Product } from "../model/product-model";
/**
 * @ProductImage: A component to show a single Product's image
 */
@Component({
  selector: 'app-product-image',
  template: `
    <img class="product-image" [src]="product.imageUrl">
  `
})
export class ProductImageComponent implements OnInit {

  @Input()
  product: Product;
  @HostBinding('attr.class')
  cssClass = 'ui small image';
  
  constructor() { }

  ngOnInit() {
  }

}
