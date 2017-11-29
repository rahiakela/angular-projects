"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var Cart = (function () {
    function Cart() {
        this.count = 0;
        this.amount = 0;
        this.items = [];
    }
    return Cart;
}());
exports.Cart = Cart;
var CartService = (function () {
    function CartService() {
        this.cart = new Cart();
    }
    /**
     * This method adds the new product or increases the number
     * of the same products in the cart.
     * It updates the amount and count of items in the cart.
     */
    CartService.prototype.addProduct = function (product) {
        // Find CartItem in items
        var item = this.findItem(product.id);
        // Check was it found?
        if (item) {
            // Item was found.
            // Increase the count of the same products
            item.count++;
            // Increase amount of the same products
            item.amount += product.price;
        }
        else {
            // Item was not found.
            // Create the cart item
            item = {
                product: product,
                count: 1,
                amount: product.price
            };
            // Add item to items
            this.cart.items.push(item);
        }
        // Increase count in the cart
        this.cart.count++;
        // Increase amount in the cart
        this.cart.amount += product.price;
        return item;
    };
    /**
     * This method decreases the number of the same products
     * in the cart or removes the last product.
     * It updates the amount and count of items in the cart.
     */
    CartService.prototype.removeProduct = function (product) {
        // Find CartItem in items
        var item = this.findItem(product.id);
        // Check is item found?
        if (item) {
            // Decrease the count
            item.count--;
            // Check was that the last product?
            if (!item.count) {
                // It was last product
                // Delete item from items
                this.remove(item);
            }
            // Decrease count in the cart
            this.cart.count--;
            // Decrease amount in the cart
            this.cart.amount -= product.price;
        }
        return item;
    };
    /**
     * Remove item from the cart.
     * It updates the amount and count of items in the cart.
     */
    CartService.prototype.removeItem = function (item) {
        // Delete item from items
        this.remove(item);
        // Decrease count in the cart
        this.cart.count -= item.count;
        // Decrease amount in the cart
        this.cart.amount -= item.amount;
    };
    /**
     * This method returns cart item by product id or null.
     */
    CartService.prototype.findItem = function (id) {
        for (var i = 0; i < this.cart.items.length; i++) {
            if (this.cart.items[i].product.id === id) {
                return this.cart.items[i];
            }
        }
        return null;
    };
    /**
     * This method removes all cart item from Cart.
     */
    CartService.prototype.clearCart = function () {
        this.cart.items = [];
        this.cart.amount = 0;
        this.cart.count = 0;
    };
    /**
     * This method removes existing cart item.
     */
    CartService.prototype.remove = function (item) {
        // Find the index of cart item
        var index = this.cart.items.indexOf(item);
        // Check was item found
        if (index !== -1) {
            // Remove element from array
            this.cart.items.splice(index, 1);
        }
    };
    return CartService;
}());
CartService = __decorate([
    core_1.Injectable()
], CartService);
exports.CartService = CartService;
//# sourceMappingURL=cart.service.js.map