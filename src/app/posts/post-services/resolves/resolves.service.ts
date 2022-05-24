import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {IPost} from "../../post-interface/IPost";
import {PostService} from "../post.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostResolvesService implements Resolve <IPost>{

  constructor(private postService:PostService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IPost> | Promise<IPost> | IPost {
    const{id}  =route.params;
    return this.postService.getPost(id);
  }
}
