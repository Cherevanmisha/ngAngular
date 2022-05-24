import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostComponent } from './posts-component/post/post.component';
import { PostsComponent } from './posts-component/posts/posts.component';
import { PostDetailsComponent } from './posts-component/post-details/post-details.component';
import {PostService} from "./post-services/post.service";
import {PostResolvesService} from "./post-services/resolves/resolves.service";


@NgModule({
  declarations: [
    PostComponent,
    PostsComponent,
    PostDetailsComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule
  ],
  providers:[PostService,
  PostResolvesService]
})
export class PostsModule { }
