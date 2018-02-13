import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryComponent } from './country.component';
import { AddCountryComponent } from './add-country/add-country.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { CountryEditComponent } from './country-edit/country-edit.component';
import { CountryListComponent } from './country-list/country-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CountryComponent, AddCountryComponent, CountryDetailComponent, CountryEditComponent, CountryListComponent]
})
export class CountryModule { }
