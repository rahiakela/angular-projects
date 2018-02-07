import { Component ,Directive, ElementRef, Input, HostListener } from "@angular/core";

@Directive({
    selector: '[popup]'
})
export class PopupDirective {

    @Input()
    message: string;

    constructor(elementRef: ElementRef) {
        console.log(elementRef);
    }

    @HostListener('click')
    displayMessage(): void {
        alert(this.message);
    }
}

@Component({
    selector: 'app-popup-demo',
    template: `
    <div class="ui message" popup message="Clicked the message">
        <div class="header">
            Learning Directives
        </div>
        <p>This should use our Popup diretive</p>
    </div>
    <i class="alarm icon" popup message="Clicked the alarm icon"></i>
    `
})
export class PopupDemoComponent {

}