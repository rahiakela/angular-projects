"use strict";
/**
 * Model Classes
 * Author:Rahi Akela
 * Date  :10/04/2017
 * Description:Descriptive model classes, as the name suggests, describe the data in the application
 * */
var Product = (function () {
    function Product(id, name, category, price) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.price = price;
    }
    return Product;
}());
exports.Product = Product;
//# sourceMappingURL=product.model.js.map