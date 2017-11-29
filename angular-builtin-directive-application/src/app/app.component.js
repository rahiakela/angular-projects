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
/**
 * Root Component Class
 * Author:Rahi Akela
 * Date  :10/04/2017
 * Description:An Angular component is responsible for managing a template and providing it with the data and logic it needs.
 * */
var core_1 = require("@angular/core");
var product_repository_1 = require("./model/product.repository");
var ProductComponent = (function () {
    function ProductComponent(ref) {
        this.repository = new product_repository_1.ProductRepository();
        this.targetName = 'Kayak';
        this.counter = 1;
        window.appRef = ref;
        window.repository = this.repository;
    }
    ProductComponent.prototype.getProductByPosition = function (position) {
        return this.repository.getProducts()[position];
    };
    ProductComponent.prototype.getProduct = function (key) {
        return this.repository.getProduct(key);
    };
    ProductComponent.prototype.getProducts = function () {
        return this.repository.getProducts();
    };
    ProductComponent.prototype.getProductCount = function () {
        return this.getProducts().length;
    };
    ProductComponent.prototype.getKey = function (index, product) {
        return product.id;
    };
    Object.defineProperty(ProductComponent.prototype, "nextProduct", {
        get: function () {
            return this.repository.getProducts().shift();
        },
        enumerable: true,
        configurable: true
    });
    ProductComponent.prototype.getProductPrice = function (index) {
        return Math.floor(this.getProduct(index).price);
    };
    return ProductComponent;
}());
ProductComponent = __decorate([
    core_1.Component({
        selector: 'app',
        templateUrl: './template.html'
    }),
    __metadata("design:paramtypes", [core_1.ApplicationRef])
], ProductComponent);
exports.ProductComponent = ProductComponent;
//# sourceMappingURL=app.component.js.map