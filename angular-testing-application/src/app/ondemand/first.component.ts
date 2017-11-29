import { Component, OnInit, HostListener, EventEmitter, Output, Input } from '@angular/core';
import { Product } from "../model/product.model";
import { ProductRepository } from "../model/product.repository";
import { RestDataSource } from "../model/rest-datasource";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html'
})
export class FirstComponent implements OnInit {

  _category: string = "Soccer";
  _products: Product[] = [];
  highlighted: boolean = false;

  constructor(public datasource: RestDataSource) { }

  ngOnInit() {
      this.updateData();
  }

  getProducts(): Product[] {
    return this._products;
  }

  set category(newValue: string){
      this._category;
      this.updateData();
  }

  updateData() {
    this.datasource.getData().subscribe(data => {
        this._products = data.filter(p => p.category == this._category);
    });
  }
}
