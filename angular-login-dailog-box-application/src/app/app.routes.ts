import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login-component';
import {PrivateComponent} from './private-component';

// declaring application routes
const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: PrivateComponent},
    {path: 'login', component: LoginComponent}
];

// Routes Provider
export const routing = RouterModule.forRoot(routes);