"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
function validateZip(c) {
    var ZIP_REGEXP = new RegExp('[A-Za-z]{5}');
    return ZIP_REGEXP.test(c.value) ? null : {
        validateZip: { valid: false }
    };
}
exports.validateZip = validateZip;
var ZipValidator = (function () {
    function ZipValidator() {
        this.validator = validateZip;
    }
    ZipValidator.prototype.validate = function (c) {
        return this.validator(c);
    };
    return ZipValidator;
}());
ZipValidator = __decorate([
    core_1.Directive({
        selector: '[validateZip][ngModel][validateZip][formControl]'
    })
], ZipValidator);
exports.ZipValidator = ZipValidator;
//# sourceMappingURL=zip.validator.js.map