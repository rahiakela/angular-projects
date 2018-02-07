import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupDemoComponent } from './popup-demo/steps/host-4';
import { PopupDirective } from './popup-demo/steps/host-4';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PopupDirective,
    PopupDemoComponent
  ],
  exports: [
    PopupDemoComponent
  ]
})
export class HostModule { }
