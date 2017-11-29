"use strict";
const datasource_1 = require("./datasource");
class ProductRepository {
    constructor() {
        this.locator = (p, id) => p.id === id;
        this.dataSource = new datasource_1.DataSource();
        this.products = new Array();
        this.dataSource.getData().forEach(p => this.products.push(p));
    }
    getProducts() {
        return this.products;
    }
    getProduct(id) {
        return this.products.find(p => this.locator(p, id));
    }
    saveProduct(product) {
        if (product.id === 0 || product.id == null) {
            product.id = this.generateID();
            this.products.push(product);
        }
        else {
            let index = this.products.findIndex(p => this.locator(p, product.id));
            this.products.splice(index, 1, product);
        }
    }
    deleteProduct(id) {
        let index = this.products.findIndex(p => this.locator(p, id));
        if (index > -1) {
            this.products.splice(index, 1);
        }
    }
    generateID() {
        let candidate = 100;
        while (this.getProduct(candidate) != null) {
            candidate++;
        }
        return candidate;
    }
}
exports.ProductRepository = ProductRepository;
//# sourceMappingURL=product.repository.js.map