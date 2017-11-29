import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Product } from "../model/product-model";

/**
 * @ProductRow: A component for the view of single Product
 */
@Component({
  selector: 'app-product-row',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.css']
})
export class ProductRowComponent implements OnInit {

  @Input()
  product: Product;
  @HostBinding('attr.class')
  cssClass= 'item';
  
  constructor() { }

  ngOnInit() {
  }

}
