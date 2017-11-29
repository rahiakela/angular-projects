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

  category: string = "Soccer";
  highlighted: boolean = false;
  @Input('pa-repository')
  repository: ProductRepository;

  constructor() { }

  ngOnInit() {
  }

  getProducts(): Product[] {
    return this.repository == null ? [] : this.repository.getProducts()
        .filter(p => p.category == this.category);
  }
}
