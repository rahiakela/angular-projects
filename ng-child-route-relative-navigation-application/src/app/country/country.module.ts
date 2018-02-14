import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryComponent } from './country.component';
import { AddCountryComponent } from './add-country/add-country.component';
import { CountryDetailComponent } from './country-list/country-detail/country-detail.component';
import { CountryEditComponent } from './country-list/country-edit/country-edit.component';
import { CountryListComponent } from './country-list/country-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CountryRoutingModule } from './country-routing.module';
import { CountryService } from './service/country.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CountryRoutingModule
  ],
  declarations: [
    CountryComponent, 
    AddCountryComponent, 
    CountryDetailComponent, 
    CountryEditComponent, 
    CountryListComponent
  ],
  providers: [
    CountryService
  ]
})
export class CountryModule { }
