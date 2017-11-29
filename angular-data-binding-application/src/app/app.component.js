"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
    function ProductComponent() {
        this.repository = new product_repository_1.ProductRepository();
    }
    ProductComponent.prototype.getClasses = function (key) {
        var product = this.repository.getProduct(key);
        return 'p-a-1 ' + (product.price < 50 ? 'bg-info' : 'bg-warning');
    };
    ProductComponent.prototype.getClassMap = function (key) {
        var product = this.repository.getProduct(key);
        return {
            'text-xs-center bg-danger': product.name === 'Kayak',
            'bg-info': product.price < 50
        };
    };
    return ProductComponent;
}());
ProductComponent = __decorate([
    core_1.Component({
        selector: 'app',
        templateUrl: './template.html'
    })
], ProductComponent);
exports.ProductComponent = ProductComponent;
//# sourceMappingURL=app.component.js.map