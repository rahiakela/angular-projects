import { Component, OnInit, Input } from '@angular/core';
import { Product } from "../model/product-model";

/**
 * @ProductDepartment: A component to show the breadcrumbs to a Product's department
 */
@Component({
  selector: 'app-product-department',
  templateUrl: './product-department.component.html'
})
export class ProductDepartmentComponent implements OnInit {

  @Input()
  product: Product;
  
  constructor() { }

  ngOnInit() {
  }

}
