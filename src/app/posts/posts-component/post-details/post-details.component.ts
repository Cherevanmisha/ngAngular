import { Component, OnInit } from '@angular/core';
import {IPost} from "../../post-interface/IPost";
import {ActivatedRoute} from "@angular/router";



@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  post: IPost;
  constructor(private activatedRoute:ActivatedRoute) {

  }
  ngOnInit(): void {
this.activatedRoute.data.subscribe(({data})=>this.post=data )

  }

}
