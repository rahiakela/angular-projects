import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormControl } from '@angular/forms';
import { CountryService } from '../service/country.service';
import { Country } from '../country';


@Component({
  selector: 'app-add-country',
  templateUrl: './add-country.component.html',
  styleUrls: ['./add-country.component.css']
})
export class AddCountryComponent implements OnInit {

  constructor(private countryService: CountryService, private route: ActivatedRoute, private router: Router) {
    
   }

  ngOnInit() {
  }

  countryForm = new FormGroup({
    name: new FormControl(),
    capital: new FormControl(),
    currency: new FormControl()
  });

  onFormSubmit() {
    let name = this.countryForm.get('name').value;
    let capital  = this.countryForm.get('capital').value;
    let currency  = this.countryForm.get('currency').value;

    let country = new Country(null, name, capital, currency);
    this.countryService.addCountry(country)
            .then(data => this.router.navigate(['../list/view', data.countryId], {relativeTo: this.route}));
  }
}
