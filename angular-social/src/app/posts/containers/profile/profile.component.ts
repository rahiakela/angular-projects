import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  public profile: any

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data
      .map(data => data['profile'])
      .subscribe((result: any) => (this.profile = result))
  }
}
