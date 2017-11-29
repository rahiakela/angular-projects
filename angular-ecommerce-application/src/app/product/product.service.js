"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
require("rxjs/add/operator/toPromise");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/observable/throw");
// import {Http, Response } from '@angular/http';
var Observable_1 = require("rxjs/Observable");
var angularfire2_1 = require("angularfire2");
require("rxjs/add/operator/catch");
require("rxjs/add/observable/throw");
var ProductService = (function () {
    function ProductService(angularFire) {
        this.angularFire = angularFire;
        // URL to Products web api
        this.productsUrl = 'app/products';
    }
    ProductService.prototype.getProducts = function (category, search) {
        if (category || search) {
            var query = {};
            if (category) {
                query.orderByChild = 'categoryId';
                query.equalTo = 'category';
            }
            else {
                query.orderByChild = 'title';
                query.startAt = search.toUpperCase();
                query.endAt = query.startAt + '\uf8ff';
            }
            return this.angularFire
                .database
                .list(this.productsUrl, { query: query })
                .catch(this.handleError);
        }
    };
    ProductService.prototype.getProduct = function (id) {
        return this.angularFire
            .database
            .object(this.productsUrl + ("/" + id))
            .catch(this.handleError);
    };
    ProductService.prototype.handleError = function (error) {
        window.alert("An error occurred: " + error);
        return Observable_1.Observable.throw(error.message || error);
    };
    return ProductService;
}());
ProductService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [angularfire2_1.AngularFire])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map