import { Component, OnInit } from '@angular/core';
import { Country } from '../../country';
import { CountryService } from '../../service/country.service';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit {

  country: Country;

  constructor(private countryService: CountryService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
          .switchMap((params: Params) => this.countryService.getCountry(+params['country-id']))
          .subscribe(country => this.country = country);
  }

}
