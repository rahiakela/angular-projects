"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var cart_menu_component_1 = require("./cart-menu.component");
var cart_service_1 = require("./cart.service");
var cart_view_component_1 = require("./cart-view.component");
var forms_1 = require("@angular/forms");
var CartModule = (function () {
    function CartModule() {
    }
    return CartModule;
}());
CartModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, router_1.RouterModule, forms_1.FormsModule, forms_1.ReactiveFormsModule],
        declarations: [cart_menu_component_1.CartMenuComponent, cart_view_component_1.CartViewComponent],
        exports: [cart_menu_component_1.CartMenuComponent, cart_view_component_1.CartViewComponent],
        providers: [cart_service_1.CartService]
    })
], CartModule);
exports.CartModule = CartModule;
//# sourceMappingURL=cart.module.js.map