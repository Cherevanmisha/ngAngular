import { Component, OnInit } from '@angular/core';
import {IPost} from "../../post-interface/IPost";
import {PostService} from "../../post-services/post.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: IPost[];


  constructor(private postService:PostService) {

  }



  ngOnInit(): void {
    this.postService.getPosts().subscribe(value => this.posts=value)
  }

}
