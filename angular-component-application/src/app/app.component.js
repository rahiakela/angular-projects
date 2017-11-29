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
var product_model_1 = require("./model/product.model");
var form_model_1 = require("./form.model");
var ProductComponent = (function () {
    function ProductComponent() {
        this.form = new form_model_1.ProductFormGroup();
        this.repository = new product_repository_1.ProductRepository();
        this.newProduct = new product_model_1.Product();
        this.formSubmitted = false;
        this.showTable = true;
    }
    ProductComponent.prototype.submitForm = function (form) {
        this.formSubmitted = true;
        if (form) {
            this.addProduct(this.newProduct);
            this.newProduct = new product_model_1.Product();
            form.reset();
            this.formSubmitted = false;
        }
    };
    ProductComponent.prototype.getProduct = function (key) {
        return this.repository.getProduct(key);
    };
    ProductComponent.prototype.getProducts = function () {
        return this.repository.getProducts();
    };
    ProductComponent.prototype.getSelected = function (product) {
        return product.name === this.selectedProduct;
    };
    Object.defineProperty(ProductComponent.prototype, "jsonProduct", {
        get: function () {
            return JSON.stringify(this.newProduct);
        },
        enumerable: true,
        configurable: true
    });
    ProductComponent.prototype.addProduct = function (p) {
        console.log('New Product:' + this.jsonProduct);
        this.repository.saveProduct(p);
    };
    ProductComponent.prototype.deleteProduct = function (key) {
        this.repository.deleteProduct(key);
    };
    return ProductComponent;
}());
ProductComponent = __decorate([
    core_1.Component({
        selector: 'app',
        templateUrl: './products-template.html',
        styles: ['/deep/ div {border: 2px black solid; font-style:italic}']
    })
], ProductComponent);
exports.ProductComponent = ProductComponent;
//# sourceMappingURL=app.component.js.map