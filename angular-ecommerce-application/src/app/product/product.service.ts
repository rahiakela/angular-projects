import {Injectable} from '@angular/core';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
// import {Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {AngularFire} from 'angularfire2';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

export interface Product {
    // Unique Id
    id: string;
    // Ref on category belongs to
    categoryId: string;
    // The title
    title: string;
    // Price
    price: number;
    // Mark product with special price
    isSpecial: boolean;
    // Description
    description: string;
    // Path to small image
    imageS: string;
    // Path to large image
    imageL: string;
}

@Injectable()
export class ProductService {

    // URL to Products web api
    private productsUrl = 'app/products';

    constructor(private angularFire: AngularFire) {}

    getProducts(category?: string, search?: string): Observable<Product[]> {

        if (category || search) {
            let query = <any>{};
            if (category) {
                query.orderByChild = 'categoryId';
                query.equalTo = 'category';
            }else {
                query.orderByChild = 'title';
                query.startAt = search.toUpperCase();
                query.endAt = query.startAt + '\uf8ff';
            }

            return this.angularFire
                .database
                .list(this.productsUrl, {query: query})
                .catch(this.handleError);
        }
    }

    getProduct(id: string): Observable<Product> {
        return this.angularFire
            .database
            .object(this.productsUrl + `/${id}`)
            .catch(this.handleError);
    }

    private handleError(error: any): Observable<any> {
        window.alert(`An error occurred: ${error}`);
        return Observable.throw(error.message || error);
    }
}

