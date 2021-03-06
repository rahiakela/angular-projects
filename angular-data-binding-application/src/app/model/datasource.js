"use strict";
/**
 * Data Source Class
 * Author:Rahi Akela
 * Date  :10/04/2017
 * Description:The data source provides the application with the data. The most common type of data source
 * uses HTTP to request data from a server
 * */
var product_model_1 = require("./product.model");
var DataSource = (function () {
    function DataSource() {
        this.data = new Array(new product_model_1.Product(1, 'Kayak', 'Watersports', 275), new product_model_1.Product(2, 'Lifejacket', 'Watersports', 48.95), new product_model_1.Product(3, 'Soccer Ball', 'Soccer', 19.50), new product_model_1.Product(4, 'Corner Flags', 'Soccer', 34.95), new product_model_1.Product(5, 'Thinking Cap', 'Chess', 16));
    }
    DataSource.prototype.getData = function () {
        return this.data;
    };
    return DataSource;
}());
exports.DataSource = DataSource;
//# sourceMappingURL=datasource.js.map