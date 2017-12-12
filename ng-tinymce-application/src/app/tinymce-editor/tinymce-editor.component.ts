import { Component, OnInit, OnDestroy, AfterViewInit, EventEmitter, Input, Output } from '@angular/core';

declare var tinymce: any;

@Component({
  selector: 'app-tinymce-editor',
  template: `<textarea id="{{elementId}}"></textarea>`
})
export class TinymceEditorComponent implements AfterViewInit, OnDestroy {

  @Input()
  elementId: string;
  @Output()
  onEditorKeyup = new EventEmitter<any>();

  editor;

  constructor() { }

  ngAfterViewInit() {
    tinymce.init({
      selector: '#' + this.elementId,
      plugins : ['link', 'paste', 'table', 'codesample'],
      skin_url : 'assets/skins/lightgray',
      setup: editor => {
        this.editor = editor;
        editor.on('keyup', () => {
          const content = editor.getContent();
          console.log('Content>>' + content);
          this.onEditorKeyup.emit(content) 
        });
      }
    });
  }

  ngOnDestroy() {
    tinymce.remove(this.editor);
  }
}
