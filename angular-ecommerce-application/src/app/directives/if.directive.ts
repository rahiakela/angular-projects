import {Directive, Input, Output} from '@angular/core';
import { TemplateRef, ViewContainerRef } from '@angular/core';
@Directive({
    selector: '[dbIf]'
})
export class IfDirective {

    constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {}

    @Input()
    set dbIf(condition: boolean) {
        if (condition) {
            this.viewContainer.createEmbeddedView(this.templateRef);
        } else {
            this.viewContainer.clear();
        }
    }
}
