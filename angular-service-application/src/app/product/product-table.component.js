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
var product_repository_1 = require("../model/product.repository");
var cell_color_directive_1 = require("../directives/cell-color-directive");
var ProductTableComponent = (function () {
    function ProductTableComponent() {
        this.showTable = true;
    }
    ProductTableComponent.prototype.getProduct = function (key) {
        return this.dataModel.getProduct(key);
    };
    ProductTableComponent.prototype.getProducts = function () {
        return this.dataModel.getProducts();
    };
    ProductTableComponent.prototype.deleteProduct = function (key) {
        this.dataModel.deleteProduct(key);
    };
    ProductTableComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.viewChildren.changes.subscribe(function () {
            _this.updateViewChildren();
        });
        this.updateViewChildren();
    };
    ProductTableComponent.prototype.updateViewChildren = function () {
        var _this = this;
        setTimeout(function () {
            _this.viewChildren.forEach(function (child, index) {
                child.setColor(index % 2 ? true : false);
            });
        }, 0);
    };
    return ProductTableComponent;
}());
__decorate([
    core_1.Input('model'),
    __metadata("design:type", product_repository_1.ProductRepository)
], ProductTableComponent.prototype, "dataModel", void 0);
__decorate([
    core_1.ViewChildren(cell_color_directive_1.PaCellColor),
    __metadata("design:type", core_1.QueryList)
], ProductTableComponent.prototype, "viewChildren", void 0);
ProductTableComponent = __decorate([
    core_1.Component({
        selector: 'paProductTable',
        templateUrl: "./product-table-template.html"
    })
], ProductTableComponent);
exports.ProductTableComponent = ProductTableComponent;
//# sourceMappingURL=product-table.component.js.map