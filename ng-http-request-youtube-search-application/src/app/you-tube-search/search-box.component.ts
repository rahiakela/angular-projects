import { Component, OnInit, EventEmitter, Output, ElementRef } from '@angular/core';
import { YouTubeSearchService } from './you-tube-search.service';
import { SearchResult } from './search-result.model';

// By importing just the rxjs operators we need, We're theoretically able
// to reduce our build size vs. importing all of them.
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switch';

@Component({
  selector: 'app-search-box',
  template: `<input type="text" class="form-control" placeholder="Search" autofocus>`
})
export class SearchBoxComponent implements OnInit {

  @Output()
  loading: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output()
  results: EventEmitter<SearchResult[]> = new EventEmitter<SearchResult[]>();

  constructor(private youtube: YouTubeSearchService, private element: ElementRef) { }

  ngOnInit(): void {
    // convert the `keyup` event into an observable stream
    Observable.fromEvent(this.element.nativeElement, 'keyup')
      .map((e: any) => e.target.value)            // extract the value of the input
      .filter((text: string) => text.length > 1)  // filter out if empty
      .debounceTime(250)                          // only once every 250ms
      .do(() => this.loading.next(true))          // enable loading
      .map((query: string) => this.youtube.search(query)) // search, discarding old events if new input comes in
      .switch()
      .subscribe(                                 // act on the return of the search
        (results: SearchResult[]) => {            // on sucesss
          this.loading.next(false);
          this.results.next(results);
        },
        (error: any) => {                         // on error
          console.log(error);
          this.loading.next(false);
        },
        () => {                                   // on completion
          this.loading.next(false);
        }
      );
  }

}
