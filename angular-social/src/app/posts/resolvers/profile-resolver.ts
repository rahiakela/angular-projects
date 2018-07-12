import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, Resolve } from '@angular/router'
import { PostsService } from '../service/posts.service'

@Injectable()
export class ProfileResolver implements Resolve<any> {
  constructor(private postService: PostsService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.postService.getProfile(route.params['profileId'])
  }
}
