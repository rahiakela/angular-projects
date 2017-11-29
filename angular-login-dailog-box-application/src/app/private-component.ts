import {Component} from '@angular/core';
import {AuthenticationService} from './login-service';

@Component({
    selector: 'login-form',
    template: `
        <div class="container" >
            <div class="content">
                <span>Congratulations, you have successfully logged in!!</span>
                <br />
                <a (click)="logout()" href="#">Click Here to logout</a>
            </div>
        </div>
    `,
    providers:[AuthenticationService]
})
export class PrivateComponent {

    constructor(private loginService: AuthenticationService) {}

    ngOnInit() {
        this.loginService.checkCredentials();
    }

    logout() {
        this.loginService.logout();
    }
}