import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { OndemandComponent } from './ondemand.component';
import { FirstComponent } from "./first.component";
import { SecondComponent } from "./second.component";

// Loading the Module Dynamically
let routing = RouterModule.forChild([
  {
    path: '', 
    component: OndemandComponent,
    children: [
      {
        path: '',
        children: [
          {outlet: 'primary', path: '', component: FirstComponent},
          {outlet: 'left', path: '', component: SecondComponent},
          {outlet: 'second', path: '', component: SecondComponent}
        ]
      },
      {
        path: 'swap',
        children: [
          {outlet: 'primary', path: '', component: FirstComponent},
          {outlet: 'left', path: '', component: SecondComponent},
          {outlet: 'second', path: '', component: SecondComponent}
        ]
      }
    ]
  }
]);

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [
    OndemandComponent,
    FirstComponent,
    SecondComponent
  ],
  exports: [OndemandComponent]
})
export class OndemandModule { }
