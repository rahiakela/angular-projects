import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'TinyMCE Sample Demo';
  elementId: string;
  editor: any;

  keyupHandler(value) {
    console.log('Hello');
  }
}
