import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {HttpModule} from '@angular/http';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
// Importing Custom Modules
import {CategoryModule} from './category/category.module';
import {ProductModule} from './product/product.module';
import {CartModule} from './cart/cart.module';
// Importing Components
import { AppComponent }  from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import {FooterComponent} from './footer/footer.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {CheckoutViewComponent} from './checkout/checkout-view.component';
// Importing Routing
import { routing } from './app.routes';
// Importing In-Memory Database
import {InMemoryDataService} from './database/in-memory-data-service';
import {AngularFireModule} from 'angularfire2';

// Initialize Firebase
export var firebaseConfig = {
  apiKey: 'AIzaSyAc83LuVBKWtcwhq2Qa4TTVQJnfkN9zpms',
  authDomain: 'angular-ecommerce-application.firebaseapp.com',
  databaseURL: 'https://angular-ecommerce-application.firebaseio.com',
  projectId: 'angular-ecommerce-application',
  storageBucket: 'angular-ecommerce-application.appspot.com',
  messagingSenderId: '47684682419'
};

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, HttpModule, InMemoryWebApiModule.forRoot(InMemoryDataService),
      routing , CategoryModule, ProductModule, CartModule, AngularFireModule.initializeApp(firebaseConfig)
  ],
  declarations: [ AppComponent, NavbarComponent, FooterComponent, WelcomeComponent, CheckoutViewComponent ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
