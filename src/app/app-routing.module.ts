import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

let routes:Routes=[
  {path:'usersPage',loadChildren:()=> import('./users/users.module').then(value => value.UsersModule)},
  {path:'postsPage',loadChildren:()=> import('./posts/posts.module').then(value => value.PostsModule)},
  {path:'commentsPage',loadChildren:()=> import('./comments/comments.module').then(value => value.CommentsModule)},
]


@NgModule({
  imports:[
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})

export class AppRoutingModule{}
