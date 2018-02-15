import { Component, OnInit } from '@angular/core';
import { Person } from '../../person';
import { PersonService } from '../../person.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.css']
})
export class PersonEditComponent implements OnInit {

  person: Person;
  personForm = new FormGroup({
    name: new FormControl(),
    city: new FormControl()
  });

  constructor(private personService: PersonService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params
            .switchMap((params: Params) => this.personService.getPerson(+params['id']))
            .subscribe(person => {
              this.person = person;
              this.setFormValues();
            });
  }

  setFormValues() {
    this.personForm.setValue({ 
      name: this.person.name, 
      city: this.person.city 
    });
  }

  onFormSubmit() {
    this.person.name = this.personForm.get('name').value;
    this.person.city = this.personForm.get('city').value;

    this.personService.updatePerson(this.person).then(() => this.router.navigate(['../'], { relativeTo: this.route }));
  }
}
