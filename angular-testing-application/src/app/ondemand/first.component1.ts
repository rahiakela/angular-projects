import { Component, OnInit, HostListener, EventEmitter, Output, Input } from '@angular/core';
import { Product } from "../model/product.model";
import { ProductRepository } from "../model/product.repository";

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html'
})
export class FirstComponent implements OnInit {

  category: string = "Soccer";
  highlighted: boolean = false;
  @Input('pa-repository')
  repository: ProductRepository;
  @Output('pa-highlight')
  change = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  getProducts(): Product[] {
    return this.repository == null ? [] : this.repository.getProducts()
        .filter(p => p.category == this.category);
  }

  @HostListener('mouseenter', ['$event.type'])
  @HostListener('mouseleave', ['$event.type'])
  setHighlight(type: string) {
    this.highlighted = type == 'mouseenter';
    this.change.emit(this.highlighted);
  }
}
