import { Injectable } from '@angular/core';
import {IComment} from "../../comment-interface/IComment";
import {CommentService} from "../comment.service";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CommentResolversService implements Resolve <IComment>{

  constructor(private commentService:CommentService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IComment> | Promise<IComment> | IComment {
    const {id} = route.params;
    return this.commentService.getComment(id);
  }
}
