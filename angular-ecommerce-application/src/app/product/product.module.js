"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var category_module_1 = require("../category/category.module");
var product_list_component_1 = require("./product-list.component");
var product_card_component_1 = require("./product-card.component");
var product_grid_component_1 = require("./product-grid.component");
var product_search_component_1 = require("./product-search.component");
var product_service_1 = require("./product.service");
var product_view_component_1 = require("./product-view.component");
var ProductModule = (function () {
    function ProductModule() {
    }
    return ProductModule;
}());
ProductModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, forms_1.FormsModule, forms_1.ReactiveFormsModule, router_1.RouterModule, category_module_1.CategoryModule],
        declarations: [product_list_component_1.ProductListComponent, product_card_component_1.ProductCardComponent, product_grid_component_1.ProductGridComponent, product_search_component_1.ProductSearchComponent, product_view_component_1.ProductViewComponent],
        exports: [product_list_component_1.ProductListComponent, product_card_component_1.ProductCardComponent, product_search_component_1.ProductSearchComponent, product_grid_component_1.ProductGridComponent, product_view_component_1.ProductViewComponent],
        providers: [product_service_1.ProductService]
    })
], ProductModule);
exports.ProductModule = ProductModule;
//# sourceMappingURL=product.module.js.map