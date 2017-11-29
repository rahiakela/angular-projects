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
var router_1 = require("@angular/router");
var cart_service_1 = require("../cart/cart.service");
require("rxjs/add/operator/debounceTime");
require("rxjs/add/operator/distinctUntilChanged");
var ProductGridComponent = (function () {
    function ProductGridComponent(router, productService, cartService) {
        this.router = router;
        this.productService = productService;
        this.cartService = cartService;
    }
    ProductGridComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router
            .queryParams
            .debounceTime(300) // wait for 300ms pause in events
            .distinctUntilChanged() // only changed values pass
            .subscribe(function (params) {
            var category = params['category'];
            var search = params['search'];
            // Return filtered data from getProducts function
            _this.products = _this.productService.getProducts(category, search).map(_this.transform);
        });
    };
    ProductGridComponent.prototype.transform = function (source) {
        var index = 0;
        var length = source.length;
        var products = [];
        while (length) {
            var row = [];
            if (length >= 3) {
                for (var i = 0; i < 3; i++) {
                    row.push(source[index++]);
                }
                products.push(row);
                length -= 3;
            }
            else {
                for (; length > 0; length--) {
                    row.push(source[index++]);
                }
                products.push(row);
            }
        }
        return products;
    };
    ProductGridComponent.prototype.addToCart = function (product) {
        this.cartService.addProduct(product);
    };
    return ProductGridComponent;
}());
ProductGridComponent = __decorate([
    core_1.Component({
        selector: 'db-product-grid',
        templateUrl: './product-grid.component.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, product_service_1.ProductService, cart_service_1.CartService])
], ProductGridComponent);
exports.ProductGridComponent = ProductGridComponent;
//# sourceMappingURL=product-grid.component.js.map