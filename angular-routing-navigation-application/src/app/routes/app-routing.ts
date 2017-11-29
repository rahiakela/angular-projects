import {RouterModule, Routes} from '@angular/router';
import {FormComponent} from '../core/form/form.component';
import {TableComponent} from '../core/table/table.component';
import {NotFoundComponent} from '../core/not-found-component';
import {ProductCountComponent} from '../core/product-count.component';
import {CategoryCountComponent} from '../core/category-count.component';
import {ModelResolver} from '../model/model-resolver';
import {TermsGuard} from './terms-guard';
import {UnsavedGuard} from '../routes/unsaved-guard';
import { LoadModuleGuard } from "../routes/load-module-guard";

const childRoutes: Routes = [
  {
    path: '',
    canActivateChild: [TermsGuard],
    children: [
        {path: 'products', component: ProductCountComponent},
        {path: 'categories', component: CategoryCountComponent},
        {path: '', component: ProductCountComponent}
    ],
    resolve: {model: ModelResolver}
  }
];

const routes: Routes = [
  { // Loading this Module Dynamically
    path: 'ondemand',
    loadChildren: 'app/ondemand/ondemand.module#OndemandModule',
    canLoad: [LoadModuleGuard]
  },
  {
    path: 'form/:mode/:id', component: FormComponent,
    resolve: {model: ModelResolver},
    canDeactivate: [UnsavedGuard]
  },
  {
    path: 'form/:mode', component: FormComponent,
    resolve: {model: ModelResolver},
    canActivate: [TermsGuard]
  },
  {path: 'table', component: TableComponent, children: childRoutes},
  {path: 'table/:category', component: TableComponent, children: childRoutes},
  {path: '', redirectTo: '/table' , pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}
];
/*
const routes: Routes = [
  {path: 'form/:mode/:id', component: FormComponent},
  {path: 'form/:mode', component: FormComponent},
  {path: 'does', redirectTo: '/form/create', pathMatch: 'prefix'},
  {
    path: 'table',
    component: TableComponent,
    children: [
      {path: 'products', component: ProductCountComponent},
      {path: 'categories', component: CategoryCountComponent}
    ]
  },
  {path: 'table/:category', component: TableComponent},
  {path: 'table', component: TableComponent},
  {path: '', redirectTo: '/table' , pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}
];
*/

export const routing = RouterModule.forRoot(routes);
