import { Component, OnInit } from '@angular/core';
import { StockInterface, StocksService } from '../../services/stocks.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  stocks: Array<StockInterface>; // Declares a property for holding an array of stocks
  symbols: Array<string>; // Declares a property for holding an array of stock symbols

  constructor(private service: StocksService) {
    // Gets the stock symbols from the service when the component is first constructed
    this.symbols = service.get();
  }

  ngOnInit() {
    // calls the service to load stock data over Http
    this.service.load(this.symbols).subscribe(stocks => (this.stocks = stocks));
  }
}
