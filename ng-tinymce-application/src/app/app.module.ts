import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TinymceEditorComponent } from './tinymce-editor/tinymce-editor.component';


@NgModule({
  declarations: [
    AppComponent,
    TinymceEditorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
