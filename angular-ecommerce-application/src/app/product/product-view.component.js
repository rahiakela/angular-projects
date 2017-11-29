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
var product_service_1 = require("./product.service");
var cart_service_1 = require("../cart/cart.service");
var router_1 = require("@angular/router");
var ProductViewComponent = (function () {
    function ProductViewComponent(route, productService, cartService) {
        this.route = route;
        this.productService = productService;
        this.cartService = cartService;
    }
    Object.defineProperty(ProductViewComponent.prototype, "quantity", {
        // getter methods for count and amount properties
        get: function () {
            return this.cartItem ? this.cartItem.count : 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductViewComponent.prototype, "amount", {
        get: function () {
            return this.cartItem ? this.cartItem.amount : 0;
        },
        enumerable: true,
        configurable: true
    });
    ProductViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route
            .params
            .subscribe(function (params) {
            // Get the product id
            var id = params['id'];
            // Return the product from ProductService
            _this.productService.getProduct(id).subscribe(function (product) { return _this.product = product; });
            // Return the cart item
            _this.cartItem = _this.cartService.findItem(id);
        });
    };
    ProductViewComponent.prototype.addToCart = function () {
        this.cartItem = this.cartService.addProduct(this.product);
    };
    ProductViewComponent.prototype.removeFromCart = function () {
        this.cartItem = this.cartService.removeProduct(this.product);
    };
    return ProductViewComponent;
}());
ProductViewComponent = __decorate([
    core_1.Component({
        selector: 'db-product-view',
        templateUrl: './product-view.component.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, product_service_1.ProductService, cart_service_1.CartService])
], ProductViewComponent);
exports.ProductViewComponent = ProductViewComponent;
//# sourceMappingURL=product-view.component.js.map