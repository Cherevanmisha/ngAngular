import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentsRoutingModule } from './comments-routing.module';
import { CommentComponent } from './comments-component/comment/comment/comment.component';
import { CommentDetailsComponent } from './comments-component/comment-details/comment-details/comment-details.component';
import { CommentsComponent } from './comments-component/comments/comments/comments.component';
import {CommentService} from "./comments-services/comment.service";
import {CommentResolversService} from "./comments-services/resolvers/resolvers.service";


@NgModule({
  declarations: [
    CommentComponent,
    CommentDetailsComponent,
    CommentsComponent
  ],
  imports: [
    CommonModule,
    CommentsRoutingModule
  ],
  providers: [CommentService,
CommentResolversService

  ]
})
export class CommentsModule { }
