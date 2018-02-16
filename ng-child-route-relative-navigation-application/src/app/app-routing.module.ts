import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddressComponent } from './address.component';

const routes: Routes = [
  { path: 'country', loadChildren: 'app/country/country.module#CountryModule', data: { preload: true} },
  { path: 'person', loadChildren: 'app/person/person.module#PersonModule'},
  { path: 'address', component: AddressComponent },
  { path: '', redirectTo: '/country', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true})
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
