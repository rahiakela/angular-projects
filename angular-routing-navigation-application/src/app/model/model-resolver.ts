import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {ProductRepository} from './product.repository';
import {RestDataSource} from './rest-datasource';
import {Product} from './product.model';
import {MessageService} from '../message/message.service';
import {Message} from '../message/message.model';

@Injectable()
export class ModelResolver {

    constructor(private repository: ProductRepository, private datasource: RestDataSource, private messageService: MessageService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product[]> {
        if(this.repository.getProducts().length == 0) {
            this.messageService.reportMessage(new Message('Loading data...'));
            return this.datasource.getData();
        }
    }
}