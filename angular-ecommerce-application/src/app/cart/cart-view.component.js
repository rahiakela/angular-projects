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
var cart_service_1 = require("./cart.service");
var CartViewComponent = (function () {
    function CartViewComponent(cartService) {
        this.cartService = cartService;
        this.cart = this.cartService.cart;
    }
    CartViewComponent.prototype.clearCart = function () {
        this.cartService.clearCart();
    };
    CartViewComponent.prototype.update = function (value, item) {
        var res = value - item.count;
        if (res > 0) {
            for (var i = 0; i < res; i++) {
                this.cartService.addProduct(item.product);
            }
        }
        else if (res < 0) {
            for (var i = 0; i < -res; i++) {
                this.cartService.removeProduct(item.product);
            }
        }
        return value;
    };
    return CartViewComponent;
}());
CartViewComponent = __decorate([
    core_1.Component({
        selector: 'db-cart-view',
        templateUrl: './cart-view.component.html'
    }),
    __metadata("design:paramtypes", [cart_service_1.CartService])
], CartViewComponent);
exports.CartViewComponent = CartViewComponent;
//# sourceMappingURL=cart-view.component.js.map