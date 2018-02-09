import { Component, OnInit, AfterContentInit, QueryList, ContentChildren } from '@angular/core';
import { ContentTabComponent } from '../content-tab/content-tab.component';

@Component({
  selector: 'app-content-tabset',
  templateUrl: './content-tabset.component.html',
  styleUrls: ['./content-tabset.component.css']
})
export class ContentTabsetComponent implements OnInit, AfterContentInit {

  @ContentChildren(ContentTabComponent)
  tabs: QueryList<ContentTabComponent>;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    this.tabs.toArray()[0].active = true;
  }

  setActive(tab: ContentTabComponent): void {
    this.tabs.toArray().forEach((t) => t.active = false);
    tab.active = true;
  }
  
}
