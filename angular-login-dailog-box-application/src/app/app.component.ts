import { Component } from '@angular/core';
import {LoginComponent} from './login-component';
import {PrivateComponent} from './private-component';

@Component({
  selector: 'my-app',
  template: `<router-outlet></router-outlet>`
})
export class AppComponent  {}
