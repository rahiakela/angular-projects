import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CountryModule } from './country/country.module';
import { AppRoutingModule } from './app-routing.module';
import { PersonModule } from './person/person.module';
import { AddressComponent } from './address.component';


@NgModule({
  declarations: [
    AppComponent,
    AddressComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    CountryModule,
    PersonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
