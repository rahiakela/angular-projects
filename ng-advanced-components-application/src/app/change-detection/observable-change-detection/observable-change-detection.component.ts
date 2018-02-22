import { Component, OnInit, ChangeDetectionStrategy, Input, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-observable-change-detection',
  template: `
    <div>
      <div>Total items: {{counter}}</div>
    </div>
    `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ObservableChangeDetectionComponent implements OnInit {

  @Input()
  items: Observable<number>;
  counter = 0;

  constructor(private changeDetector: ChangeDetectorRef) { }

  ngOnInit() {
    // onNext callback
    this.items.subscribe((v) => {
      console.log('Got value ', v);
      this.counter++;

      if (this.counter % 5 === 0) {
        this.changeDetector.markForCheck();
      }
    },
    // onError callback
    null,
    // onComplete callback
    () => {
      this.changeDetector.markForCheck();
    }
    );
  }

}
