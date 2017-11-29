import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {MessageService} from '../message/message.service';
import {Message} from '../message/message.model';
import {FormComponent} from '../core/form/form.component';

@Injectable()
export class UnsavedGuard {

    constructor(private messageService: MessageService, private router: Router) {}

    canDeactivate(component: FormComponent, route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
        if(component.editing) {
            if(['name', 'category', 'price'].some(prop => component[prop] != component.originalProduct[prop])) {
                let subject = new Subject<boolean>();
                let responses: [[string, (string) => void]] = [
                    ['Yes', () => {
                        subject.next(true);
                        subject.complete();
                    }],
                    ['No', () => {
                        this.router.navigateByUrl(this.router.url);
                        subject.next(false);
                        subject.complete();
                    }]
                ];
                this.messageService.reportMessage(new Message('Discard Changes?', false, responses));
                return subject;
            }
        }
        return true;
    }
}