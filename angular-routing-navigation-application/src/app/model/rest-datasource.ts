/**
 * REST Data Source Class
 * Author:Rahi Akela
 * Date  :05/07/2017
 * Description:The data source provides the application with the data. The most common type of data source
 * uses HTTP to request data from a server
 * */
import {Inject, Injectable, OpaqueToken} from '@angular/core';
import {Http, Request, RequestMethod, Headers, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Product} from './product.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/delay';

export const REST_URL = new OpaqueToken('rest_url');

@Injectable()
export class RestDataSource {

  constructor(private http: Http, @Inject(REST_URL) private url: string) {}

  getData(): Observable<Product[]> {
    return this.sendRequest(RequestMethod.Get, this.url);
  }

  saveProduct(product: Product): Observable<Product> {
    return this.sendRequest(RequestMethod.Post, this.url, product);
  }

  updateProduct(product: Product): Observable<Product> {
    return this.sendRequest(RequestMethod.Put, `${this.url}/${product.id}`, product)
  }

  deleteProduct(id: number): Observable<Product> {
    return this.sendRequest(RequestMethod.Delete, `${this.url}/${id}`);
  }

  private sendRequest(verb: RequestMethod, url: string, body?: Product): Observable<Product> {
    let headers = new Headers();
    headers.set('Access-Key','<secret>');
    headers.set('Application-Names', 'exampleApp');

    return this.http.request(new Request({
      method: verb,
      url: url,
      body: body
    }))
      .delay(5000)
      .map(response => response.json())
      .catch((error: Response) => Observable.throw(`Network Error:${error.statusText} (${error.status})`));
  }
}
