import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPost} from "../post-interface/IPost";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = "https://jsonplaceholder.typicode.com/posts";


  constructor(private http:HttpClient) {
  }
  getPosts():Observable<IPost[]>{
    return this
      .http
      .get<any[]>(this.url)
  }
  getPost(id:string):Observable<IPost>{
    return this
      .http
      .get<any>(this.url + '/' + id);
  }

}
