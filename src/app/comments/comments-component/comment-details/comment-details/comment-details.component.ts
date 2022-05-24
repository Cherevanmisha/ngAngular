import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IComment} from "../../../comment-interface/IComment";




@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {
  comment: IComment;


  constructor(private activatedRouter: ActivatedRoute) {

  }

  ngOnInit(): void {
  this.activatedRouter.data.subscribe(({data})=>this.comment=data)
  }

}
