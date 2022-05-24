import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from "@angular/common/http";
import {PostsComponent} from "./posts-component/posts/posts.component";
import {PostDetailsComponent} from "./posts-component/post-details/post-details.component";
import {PostResolvesService} from "./post-services/resolves/resolves.service";
import {PostGuard} from "./post-services/guards/post.guard";

const routes: Routes = [
  {path:'', component:PostsComponent, canActivate: [PostGuard], children:[
      {path:':id', component: PostDetailsComponent, resolve:{data:PostResolvesService}}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes),HttpClientModule],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
