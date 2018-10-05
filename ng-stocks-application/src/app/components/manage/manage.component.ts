import { Component, OnInit } from '@angular/core';
import { StocksService } from '../../services/stocks.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css'],
})
export class ManageComponent implements OnInit {
  // Defines class and two properties for storing the array of symbols and a string for input
  symbols: Array<string>;
  stock: string;

  constructor(private service: StocksService) {
    // Gets the current list of symbols during class instantiation
    this.symbols = service.get();
  }

  ngOnInit() {}

  // Method to add a new stock to the list
  add() {
    this.symbols = this.service.add(this.stock.toUpperCase());
    this.stock = '';
  }

  // Method to remove a stock symbol from the list
  remove(symbol) {
    this.symbols = this.service.remove(symbol);
  }
}
