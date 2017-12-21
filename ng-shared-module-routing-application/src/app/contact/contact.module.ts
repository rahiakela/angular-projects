import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ContactRoutingModule} from './contact-routing.module';
import {ContactComponent} from './contact.component';
import {ContactHighlightDirective} from './contact-highlight.directive';
import {ContactService} from './contact.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ContactRoutingModule
  ],
  declarations: [
    ContactComponent,
    ContactHighlightDirective
  ],
  providers: [ContactService]
})
export class ContactModule { }
