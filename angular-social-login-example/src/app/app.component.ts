import { Component, OnDestroy } from '@angular/core';
import { AuthService } from "angular2-social-login";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  
  public user;
  sub: any;

  constructor(public auth: AuthService) {}

  signIn(provider: string) {
    this.sub = this.auth.login(provider).subscribe((data) => {
      console.log(data);
      this.user = data;
    });
  }

  logout() {
    this.auth.logout().subscribe((data) => {
      console.log(data);
      this.user = null;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
