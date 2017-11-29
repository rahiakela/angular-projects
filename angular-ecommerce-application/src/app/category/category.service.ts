import {Injectable} from '@angular/core';
// import {Http, Response} from '@angular/http';
import {AngularFire} from 'angularfire2';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

export class Category {
    // Unique Id
    id: string;
    // The title
    title: string;
    // Description
    description: string;
    // Path to image
    imageS: string;
    // Path to large image
    imageL: string;
}

@Injectable()
export class CategoryService {

    // URL to Categories web api
    private categoriesUrl = 'app/categories';
    // We keep categories in cache variable
    private categories: Category[] = [];

    constructor(private angularFire: AngularFire) {}

    getCategories(): Observable<Category[]> {
        return this.angularFire.database
                .list(this.categoriesUrl)
                .catch(this.handleError);
    }

    getCategory(id: string): Category {
        for (let i = 0; i < this.categories.length; i++) {
            return this.categories[i];
        }
        throw new CategoryNotFoundException(`Category ${id} not found`);
    }

    private handleError(error: any): Promise<any> {
        window.alert(`An error occurred: ${error}`);
        return Promise.reject(error.message || error);
    }
}
export class CategoryNotFoundException extends  Error {
    constructor(message?: string) {
        super(message);
    }
}

