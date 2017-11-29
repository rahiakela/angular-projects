import {Injectable} from '@angular/core';
import {Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {MessageService} from '../message/message.service';
import {Message} from '../message/message.model';

@Injectable()
export class TermsGuard {

    constructor(private messageService: MessageService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> | boolean {
        if(route.params['mode'] == 'create') {
            return new Promise<boolean>((resolve, reject) => {
                let responses: [[string, (string) => void]] = [
                    ['Yes', () => {resolve(true)}],
                    ['No', () => {
                        this.router.navigateByUrl(this.router.url);
                        resolve(false);
                    }]
                ];
                this.messageService.reportMessage(new Message('Do you accept the terms & conditions?', false, responses));
            });
        } else {
            return true;
        }
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> | boolean {
        if(route.url.length > 0 && route.url[route.url.length - 1].path == 'categories') {
            return new Promise<boolean>((resolve, reject) => {
                let responses: [[string, (string) => void]] = [
                    ['Yes', () => {resolve(true)}],
                    ['No', () => {
                        this.router.navigateByUrl(this.router.url.replace('categories', 'products'));
                        resolve(false);
                    }]
                ];
                this.messageService.reportMessage(new Message('Do you want to see the categories component?', false, responses));
            });
        } else {
            return true;
        }
    }
}