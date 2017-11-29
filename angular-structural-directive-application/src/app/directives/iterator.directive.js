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
const core_1 = require("@angular/core");
let PaIteratorDirective = class PaIteratorDirective {
    constructor(container, template, differs, changeDetector) {
        this.container = container;
        this.template = template;
        this.differs = differs;
        this.changeDetector = changeDetector;
        this.views = new Map();
    }
    ngOnInit() {
        this.differ = this.differs.find(this.dataSource).create();
    }
    ngDoCheck() {
        let changes = this.differ.diff(this.dataSource);
        if (changes != null) {
            console.log("ngDoCheck called, changes detected");
            changes.forEachAddedItem(addition => {
                let context = new PaIteratorContext(addition.item, addition.currentIndex, changes.length);
                context.view = this.container.createEmbeddedView(this.template, context);
                this.views.set(addition.trackById, context);
            });
            let removals = false;
            changes.forEachRemovedItem(removal => {
                removals = true;
                let context = this.views.get(removal.trackById);
                if (context != null) {
                    this.container.remove(this.container.indexOf(context.view));
                    this.views.delete(removal.trackById);
                }
            });
            if (removals) {
                let index = 0;
                this.views.forEach(context => {
                    context.setData(index++, this.views.size);
                });
            }
        }
    }
    updateContent() {
        this.container.clear();
        for (let i = 0; i < this.dataSource.length; i++) {
            this.container.createEmbeddedView(this.template, new PaIteratorContext(this.dataSource[i], i, this.dataSource.length));
        }
    }
};
__decorate([
    core_1.Input("paForOf"),
    __metadata("design:type", Object)
], PaIteratorDirective.prototype, "dataSource", void 0);
PaIteratorDirective = __decorate([
    core_1.Directive({
        selector: '[paForOf]'
    }),
    __metadata("design:paramtypes", [core_1.ViewContainerRef, core_1.TemplateRef, core_1.IterableDiffers, core_1.ChangeDetectorRef])
], PaIteratorDirective);
exports.PaIteratorDirective = PaIteratorDirective;
class PaIteratorContext {
    constructor($implicit, position, total) {
        this.$implicit = $implicit;
        this.position = position;
        this.setData(position, total);
        // Dealing with Property-Level Data Changes
        //setInterval(() => {
        //   this.odd = !this.odd;
        //   this.even = !this.even;
        //   this.$implicit.price++;
        //}, 2000);
    }
    setData(index, total) {
        this.index = index;
        this.odd = index % 2 == 1;
        this.even = !this.odd;
        this.first = index == 0;
        this.last = index == total - 1;
    }
}
//# sourceMappingURL=iterator.directive.js.map