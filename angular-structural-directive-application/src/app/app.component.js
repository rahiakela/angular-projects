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
const core_1 = require("@angular/core");
const product_repository_1 = require("./model/product.repository");
const product_model_1 = require("./model/product.model");
const form_model_1 = require("./form.model");
let ProductComponent = class ProductComponent {
    constructor() {
        this.form = new form_model_1.ProductFormGroup();
        this.repository = new product_repository_1.ProductRepository();
        this.newProduct = new product_model_1.Product();
        this.formSubmitted = false;
        this.showTable = true;
    }
    submitForm(form) {
        this.formSubmitted = true;
        if (form) {
            this.addProduct(this.newProduct);
            this.newProduct = new product_model_1.Product();
            form.reset();
            this.formSubmitted = false;
        }
    }
    getProduct(key) {
        return this.repository.getProduct(key);
    }
    getProducts() {
        return this.repository.getProducts();
    }
    getSelected(product) {
        return product.name === this.selectedProduct;
    }
    get jsonProduct() {
        return JSON.stringify(this.newProduct);
    }
    addProduct(p) {
        console.log('New Product:' + this.jsonProduct);
        this.repository.saveProduct(p);
    }
    deleteProduct(key) {
        this.repository.deleteProduct(key);
    }
};
ProductComponent = __decorate([
    core_1.Component({
        selector: 'app',
        templateUrl: './products-template3.html'
    })
], ProductComponent);
exports.ProductComponent = ProductComponent;
//# sourceMappingURL=app.component.js.map