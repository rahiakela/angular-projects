import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentTabComponent } from './content-tab/content-tab.component';
import { ContentTabsetComponent } from './content-tabset/content-tabset.component';
import { ContentTabsDemoComponent } from './content-tabs-demo/content-tabs-demo.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ContentTabComponent, 
    ContentTabsetComponent, 
    ContentTabsDemoComponent
  ],
  exports: [
    ContentTabComponent, 
    ContentTabsetComponent, 
    ContentTabsDemoComponent
  ]
})
export class TabsModule { }
