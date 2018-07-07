import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PostsService} from '../../service/posts.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public profile = {id: null};

  constructor(private route: ActivatedRoute,
              private postsService: PostsService) { }

  ngOnInit() {
    this.postsService.getProfile(this.route.snapshot.params['profileId'])
      .subscribe((result: any) => this.profile = result);
  }

}
