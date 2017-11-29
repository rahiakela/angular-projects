import {Product} from '../product/product.service';
import {Injectable} from '@angular/core';

export class Cart {
    count: number = 0;
    amount: number = 0;
    items: CartItem[] = [];
}

export interface CartItem {
    product: Product;
    count: number;
    amount: number;
}

@Injectable()
export class CartService {

    cart: Cart = new Cart();

    /**
     * This method adds the new product or increases the number
     * of the same products in the cart.
     * It updates the amount and count of items in the cart.
     */
    addProduct(product: Product): CartItem {
        // Find CartItem in items
        let item: CartItem = this.findItem(product.id);
        // Check was it found?
        if (item) {
            // Item was found.
            // Increase the count of the same products
            item.count++;
            // Increase amount of the same products
            item.amount += product.price;
        } else {
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
    }

    /**
     * This method decreases the number of the same products
     * in the cart or removes the last product.
     * It updates the amount and count of items in the cart.
     */
    removeProduct(product: Product) : CartItem {
        // Find CartItem in items
        let item: CartItem = this.findItem(product.id);
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
    }

    /**
     * Remove item from the cart.
     * It updates the amount and count of items in the cart.
     */
    removeItem(item: CartItem) {
        // Delete item from items
        this.remove(item);
        // Decrease count in the cart
        this.cart.count -= item.count;
        // Decrease amount in the cart
        this.cart.amount -= item.amount;
    }

    /**
     * This method returns cart item by product id or null.
     */
    findItem(id: string) {
        for (let i = 0; i < this.cart.items.length; i++) {
            if (this.cart.items[i].product.id === id) {
                return this.cart.items[i];
            }
        }
        return null;
    }

    /**
     * This method removes all cart item from Cart.
     */
    clearCart() {
        this.cart.items = [];
        this.cart.amount = 0;
        this.cart.count = 0;
    }

    /**
     * This method removes existing cart item.
     */
    private remove(item: CartItem) {
        // Find the index of cart item
        let index: number = this.cart.items.indexOf(item);
        // Check was item found
        if (index !== -1) {
            // Remove element from array
            this.cart.items.splice(index, 1);
        }
    }
}
