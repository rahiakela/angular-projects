"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Root Module
 * Author:Rahi Akela
 * Date  :10/04/2017
 * Description:Every project has a root module, which is responsible for describing the application to Angular.
 * */
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var attr__directive_1 = require("./directives/attr. directive");
var twoway_directive_1 = require("./directives/twoway.directive");
var structure_directive_1 = require("./directives/structure.directive");
var iterator_directive_1 = require("./directives/iterator.directive");
var cell_color_directive_1 = require("./directives/cell-color-directive");
var cell_color_switcher_directive_1 = require("./directives/cell-color-switcher-directive");
var product_table_component_1 = require("./product/product-table.component");
var product_form_component_1 = require("./product/product-form.component");
var app_component_1 = require("./app.component");
var toggle_view_component_1 = require("./toggle-view-component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, forms_1.ReactiveFormsModule],
        declarations: [app_component_1.ProductComponent, attr__directive_1.PaAttrDirective, twoway_directive_1.PaModel, structure_directive_1.PaStructureDirective, iterator_directive_1.PaIteratorDirective, cell_color_directive_1.PaCellColor,
            cell_color_switcher_directive_1.PaCellColorSwitcher, product_form_component_1.ProductFormComponent, product_table_component_1.ProductTableComponent, toggle_view_component_1.PaToggleView],
        bootstrap: [app_component_1.ProductComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map