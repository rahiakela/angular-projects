import { Injectable } from '@angular/core'
import { Resolve } from '@angular/router'
import { PostsService } from '../service/posts.service'

@Injectable()
export class PostsResolver implements Resolve<any> {
  constructor(private postService: PostsService) {}

  resolve() {
    return this.postService.getPosts()
  }
}
