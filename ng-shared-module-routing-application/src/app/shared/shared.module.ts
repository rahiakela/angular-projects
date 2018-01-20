import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HighlightDirective} from './highlight.directive';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HighlightDirective],
  exports: [
    HighlightDirective,
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
