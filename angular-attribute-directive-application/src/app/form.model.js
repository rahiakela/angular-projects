"use strict";
const forms_1 = require("@angular/forms");
const limit_formvalidator_1 = require("./limit.formvalidator");
class ProductFormControl extends forms_1.FormControl {
    constructor(label, property, value, validator) {
        super(value, validator);
        this.label = label;
        this.modelProperty = property;
    }
    getValidationMessages() {
        let messages = [];
        if (this.errors) {
            for (let erroName in this.errors) {
                switch (erroName) {
                    case 'required':
                        messages.push(`You must enter a ${this.label}`);
                        break;
                    case 'minlength':
                        messages.push(`A ${this.label} must be at least ${this.errors['minlength'].requiredLength} characters`);
                        break;
                    case 'maxlength':
                        messages.push(`A ${this.label} must be more than ${this.errors['maxlength'].requiredLength} characters`);
                        break;
                    case 'limit':
                        messages.push(`A ${this.label} cannot be more than ${this.errors['limit'].limit}`);
                        break;
                    case 'pattern':
                        messages.push(`The ${this.label} contains illegal characters`);
                        break;
                }
            }
        }
        return messages;
    }
}
exports.ProductFormControl = ProductFormControl;
class ProductFormGroup extends forms_1.FormGroup {
    constructor() {
        super({
            name: new ProductFormControl('Name', 'name', '', forms_1.Validators.compose([forms_1.Validators.pattern('^[A-Za-z ]+$'), forms_1.Validators.minLength(5), forms_1.Validators.maxLength(15)])),
            category: new ProductFormControl('Category', 'category', '', forms_1.Validators.compose([forms_1.Validators.pattern('^[A-Za-z ]+$'), forms_1.Validators.minLength(3), forms_1.Validators.maxLength(10)])),
            price: new ProductFormControl('Price', 'price', '', forms_1.Validators.compose([forms_1.Validators.required, limit_formvalidator_1.LimitValidator.Limit(2000), forms_1.Validators.pattern('^[0-9\.]+$')]))
        });
    }
    get productControls() {
        return Object.keys(this.controls).map(k => this.controls[k]);
    }
    getFormValidationMessages(form) {
        let messages = [];
        this.productControls.forEach(c => c.getValidationMessages().forEach(m => messages.push(m)));
        return messages;
    }
}
exports.ProductFormGroup = ProductFormGroup;
//# sourceMappingURL=form.model.js.map