import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonComponent } from './person/person.component';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonEditComponent } from './person-list/person-edit/person-edit.component';

const personRoutes: Routes = [
  { 
    path: 'person', component: PersonComponent, 
    children: [
      { 
        path: '', component: PersonListComponent,
        children: [
          { path: ':id', component: PersonEditComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(personRoutes)
  ],
  exports: [ RouterModule ]
})
export class PersonRoutingModule { }
