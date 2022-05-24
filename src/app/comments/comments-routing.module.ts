import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from "@angular/common/http";
import {CommentsComponent} from "./comments-component/comments/comments/comments.component";
import {CommentDetailsComponent} from "./comments-component/comment-details/comment-details/comment-details.component";
import {CommentResolversService} from "./comments-services/resolvers/resolvers.service";

const routes: Routes = [
  {path:'', component:CommentsComponent, children: [
      {path: ':id', component:CommentDetailsComponent,resolve:{data:CommentResolversService}}
    ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes),HttpClientModule],
  exports: [RouterModule]
})
export class CommentsRoutingModule { }
