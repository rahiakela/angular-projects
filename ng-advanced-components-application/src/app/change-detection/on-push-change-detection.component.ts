import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Profile } from './profile.model';

@Component({
  selector: 'app-on-push-change-detection',
  templateUrl: './on-push-change-detection.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnPushChangeDetectionComponent implements OnInit {

  @Input()
  profile: Profile;

  constructor() { }

  ngOnInit() {
  }

}
