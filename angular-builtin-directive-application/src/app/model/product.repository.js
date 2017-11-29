"use strict";
/**
 * Model Repository Class
 * Author:Rahi Akela
 * Date  :10/04/2017
 * Description:The repository will provide access to the data from the data source and allow it to be manipulated in the application
 * */
var product_model_1 = require("./product.model");
var datasource_1 = require("./datasource");
var ProductRepository = (function () {
    function ProductRepository() {
        var _this = this;
        this.locator = function (p, id) { return p.id === id; };
        this.dataSource = new datasource_1.DataSource();
        this.products = new Array();
        this.dataSource.getData().forEach(function (p) { return _this.products.push(p); });
    }
    ProductRepository.prototype.getProducts = function () {
        return this.products;
    };
    ProductRepository.prototype.getProduct = function (id) {
        var _this = this;
        return this.products.find(function (p) { return _this.locator(p, id); });
    };
    ProductRepository.prototype.saveProduct = function (product) {
        var _this = this;
        if (product.id === 0 || product.id == null) {
            product.id = this.generateID();
            this.products.push(product);
        }
        else {
            var index = this.products.findIndex(function (p) { return _this.locator(p, product.id); });
            this.products.splice(index, 1, product);
        }
    };
    ProductRepository.prototype.deleteProduct = function (id) {
        var _this = this;
        var index = this.products.findIndex(function (p) { return _this.locator(p, id); });
        if (index > -1) {
            this.products.splice(index, 1);
        }
    };
    ProductRepository.prototype.swapProduct = function () {
        var p = this.products.shift();
        this.products.push(new product_model_1.Product(p.id, p.name, p.category, p.price));
    };
    ProductRepository.prototype.generateID = function () {
        var candidate = 100;
        while (this.getProduct(candidate) != null) {
            candidate++;
        }
        return candidate;
    };
    return ProductRepository;
}());
exports.ProductRepository = ProductRepository;
//# sourceMappingURL=product.repository.js.map