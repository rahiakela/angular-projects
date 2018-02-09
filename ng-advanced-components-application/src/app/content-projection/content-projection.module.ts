import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageComponent } from './message/message.component';
import { ContentProjectionDemoComponent } from './content-projection-demo/content-projection-demo.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ContentProjectionDemoComponent,
    MessageComponent
  ],
  exports: [
    ContentProjectionDemoComponent,
    MessageComponent
  ]
})
export class ContentProjectionModule { }
