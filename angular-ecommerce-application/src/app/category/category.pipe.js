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
var category_service_1 = require("./category.service");
/*
 * Return category title of the value
 * Usage:
 * value | categoryTitle
 * Example:
 * {{ categoryId | categoryTitle }}
 * presume categoryId='1'
 * result formats to 'Bread & Bakery'
 */
var CategoryTitlePipe = (function () {
    function CategoryTitlePipe(categoryService) {
        this.categoryService = categoryService;
    }
    CategoryTitlePipe.prototype.transform = function (value) {
        var category = this.categoryService.getCategory(value);
        return category ? category.title : '';
    };
    return CategoryTitlePipe;
}());
CategoryTitlePipe = __decorate([
    core_1.Pipe({ name: 'categoryTitle' }),
    __metadata("design:paramtypes", [category_service_1.CategoryService])
], CategoryTitlePipe);
exports.CategoryTitlePipe = CategoryTitlePipe;
//# sourceMappingURL=category.pipe.js.map