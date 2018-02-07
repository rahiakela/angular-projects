import { Component ,Directive, ElementRef } from "@angular/core";

@Directive({
    selector: '[popup]'
})
export class PopupDirective {

    constructor(elementRef: ElementRef) {
        console.log(elementRef);
    }
}

@Component({
    selector: 'app-popup-demo',
    template: `
    <div class="ui message" popup>
        <div class="header">
            Learning Directives
        </div>
        <p>This should use our Popup diretive</p>
    </div>
    <i class="alarm icon" popup></i>
    `
})
export class PopupDemoComponent2 {

}