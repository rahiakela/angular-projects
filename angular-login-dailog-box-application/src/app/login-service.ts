
import {Router} from '@angular/router';
import {Injectable} from '@angular/core';

export class User {
    constructor(public email: string, public password: string) {}
}

let users= [
    new User('admin@admin.com', 'adm9'),
    new User('user1@gmail.com', 'user123')
];

@Injectable()
export class AuthenticationService {

    constructor(private router: Router) {}

    logout() {
        localStorage.removeItem('user');
        this.router.navigate(['Login']);
    }

    login(user: User) {
        let authenticatedUser = users.find(u => u.email === user.email);
        if(authenticatedUser && authenticatedUser.password === user.password) {
            localStorage.setItem('user', JSON.stringify(authenticatedUser));
            this.router.navigate(['Home']);

            return true;
        }
        return false;
    }

    checkCredentials() {
        if(localStorage.getItem('user') === null) {
            this.router.navigate(['Login']);
        }
    }
}