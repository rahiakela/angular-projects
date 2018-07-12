import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  public posts: any

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data
      .map(data => data['posts'])
      .map(data => data['items'])
      .subscribe((result: any) => (this.posts = result))
  }
}
