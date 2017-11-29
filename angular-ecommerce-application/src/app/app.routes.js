"use strict";
var router_1 = require("@angular/router");
var welcome_component_1 = require("./welcome/welcome.component");
var product_list_component_1 = require("./product/product-list.component");
var cart_view_component_1 = require("./cart/cart-view.component");
var product_view_component_1 = require("./product/product-view.component");
var checkout_view_component_1 = require("./checkout/checkout-view.component");
// declaring application routes
var routes = [
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: 'welcome', component: welcome_component_1.WelcomeComponent },
    { path: 'products', component: product_list_component_1.ProductListComponent },
    { path: 'products/:id', component: product_view_component_1.ProductViewComponent },
    { path: 'cart', component: cart_view_component_1.CartViewComponent },
    { path: 'checkout', component: checkout_view_component_1.CheckoutViewComponent }
];
// Routes Provider
exports.routing = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routes.js.map