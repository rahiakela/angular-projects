"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
// import {Http, Response} from '@angular/http';
var angularfire2_1 = require("angularfire2");
require("rxjs/add/operator/catch");
require("rxjs/add/observable/throw");
var Category = (function () {
    function Category() {
    }
    return Category;
}());
exports.Category = Category;
var CategoryService = (function () {
    function CategoryService(angularFire) {
        this.angularFire = angularFire;
        // URL to Categories web api
        this.categoriesUrl = 'app/categories';
        // We keep categories in cache variable
        this.categories = [];
    }
    CategoryService.prototype.getCategories = function () {
        return this.angularFire.database
            .list(this.categoriesUrl)
            .catch(this.handleError);
    };
    CategoryService.prototype.getCategory = function (id) {
        for (var i = 0; i < this.categories.length; i++) {
            return this.categories[i];
        }
        throw new CategoryNotFoundException("Category " + id + " not found");
    };
    CategoryService.prototype.handleError = function (error) {
        window.alert("An error occurred: " + error);
        return Promise.reject(error.message || error);
    };
    return CategoryService;
}());
CategoryService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [angularfire2_1.AngularFire])
], CategoryService);
exports.CategoryService = CategoryService;
var CategoryNotFoundException = (function (_super) {
    __extends(CategoryNotFoundException, _super);
    function CategoryNotFoundException(message) {
        return _super.call(this, message) || this;
    }
    return CategoryNotFoundException;
}(Error));
exports.CategoryNotFoundException = CategoryNotFoundException;
//# sourceMappingURL=category.service.js.map