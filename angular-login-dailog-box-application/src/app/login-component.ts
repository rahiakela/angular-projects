
import {Component, ElementRef} from '@angular/core';
import {AuthenticationService, User} from './login-service';

@Component({
    selector: 'login-form',
    template: `
        <div class="container">
            <div class="title">Welcome</div>
            <div class="panel-body">
                <div class="row">
                    <div class="input-field col s12">
                        <input [(ngModel)]="user.email" id="email" type="email" class="validate">
                        <label for="email">Email</label>
                    </div>
                </div>

                <div class="row">
                    <div class="input-field col s12">
                        <input [(ngModel)]="user.password" id="password" type="password" class="validate">
                        <label for="password">Password</label>
                    </div>
                </div>

                <span>{{errorMsg}}</span>
                <button (click)="login()" class="btn waves-effect waves-light" type="submit" name="action">Login</button>
            </div>
        </div>
    `,
    providers:[AuthenticationService]
})
export class LoginComponent {

    public user = new User('', '');
    public errorMessage = '';

    constructor(private loginService: AuthenticationService) {
        
    }

    login() {
        if(!this.loginService.login(this.user)) {
            this.errorMessage = 'Failed to login';
        }
    }
}