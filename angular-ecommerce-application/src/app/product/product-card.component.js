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
var ProductCardComponent = (function () {
    function ProductCardComponent() {
        this.addToCart = new core_1.EventEmitter();
    }
    ProductCardComponent.prototype.setClasses = function (product) {
        return {
            'card-danger': product.isSpecial,
            'card-inverse': product.isSpecial
        };
    };
    ProductCardComponent.prototype.buy = function (product) {
        console.log('We bought ', product.title);
        this.addToCart.emit(product);
    };
    return ProductCardComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], ProductCardComponent.prototype, "products", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], ProductCardComponent.prototype, "addToCart", void 0);
ProductCardComponent = __decorate([
    core_1.Component({
        selector: 'db-product-card',
        templateUrl: './product-card.component.html'
    })
], ProductCardComponent);
exports.ProductCardComponent = ProductCardComponent;
//# sourceMappingURL=product-card.component.js.map