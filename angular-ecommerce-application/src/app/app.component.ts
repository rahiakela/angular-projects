import { Component } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: './app.component.html'
})
export class AppComponent  {

  name: string = 'Admin';
  password: string;
  phone: string;
  email: string = 'admin@test.com';

  handle(value: any) {
    console.log(value);
  }
}
