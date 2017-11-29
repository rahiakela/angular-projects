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
var category_card_component_1 = require("./category-card.component");
var category_slide_component_1 = require("./category-slide.component");
var forms_1 = require("@angular/forms");
var category_list_component_1 = require("./category-list.component");
var category_service_1 = require("./category.service");
var category_pipe_1 = require("./category.pipe");
var CategoryModule = (function () {
    function CategoryModule() {
    }
    return CategoryModule;
}());
CategoryModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, router_1.RouterModule, forms_1.FormsModule],
        declarations: [category_card_component_1.CategoryCardComponent, category_slide_component_1.CategorySlideComponent, category_list_component_1.CategoryListComponent, category_pipe_1.CategoryTitlePipe],
        exports: [category_card_component_1.CategoryCardComponent, category_slide_component_1.CategorySlideComponent, category_list_component_1.CategoryListComponent, category_pipe_1.CategoryTitlePipe],
        providers: [category_service_1.CategoryService]
    })
], CategoryModule);
exports.CategoryModule = CategoryModule;
//# sourceMappingURL=category.module.js.map