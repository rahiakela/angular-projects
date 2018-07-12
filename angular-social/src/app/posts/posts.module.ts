import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { PostItemComponent } from './components/post-item/post-item.component'
import { PostListComponent } from './components/post-list/post-list.component'
import { ProfileItemComponent } from './components/profile-item/profile-item.component'
import { PostsComponent } from './containers/posts/posts.component'
import { ProfileComponent } from './containers/profile/profile.component'
import { PostsRoutingModule } from './posts-routing.module'
import { PostsResolver } from './resolvers/posts-resolver'
import { ProfileResolver } from './resolvers/profile-resolver'
import { PostsService } from './service/posts.service'

@NgModule({
  imports: [CommonModule, PostsRoutingModule],
  declarations: [
    PostsComponent,
    ProfileComponent,
    PostListComponent,
    PostItemComponent,
    ProfileItemComponent,
  ],
  providers: [PostsService, PostsResolver, ProfileResolver],
})
export class PostsModule {}
