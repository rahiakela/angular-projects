import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonComponent } from './person/person.component';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonEditComponent } from './person-list/person-edit/person-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PersonRoutingModule } from './person-routing.module';
import { PersonService } from './person.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PersonRoutingModule
  ],
  declarations: [
    PersonComponent, 
    PersonListComponent, 
    PersonEditComponent
  ],
  providers: [ PersonService ]
})
export class PersonModule { }
