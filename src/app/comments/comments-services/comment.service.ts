import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IComment} from "../comment-interface/IComment";


@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private url = "https://jsonplaceholder.typicode.com/comments";

  constructor(private http:HttpClient) {
  }
  getComments(): Observable <IComment[]>{
    return this
      .http
      .get<any[]> (this.url)
  }
  getComment(id:string): Observable<IComment>{
    return this.http
      .get<any>(this.url + '/' + id)
  }
}
