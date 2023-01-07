import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { UtilityService } from 'src/app/shared/services/utility.service';
import { Posts } from '../models/data.model';
@Injectable()
export class PostsService {

  public baseurl = 'https://jsonplaceholder.typicode.com/posts'

  constructor(private _http: HttpClient, private utilityService: UtilityService) { }

  // To get posts
  getPosts(): Observable<Posts[]> {
    return this._http.get<Posts[]>(this.baseurl).pipe(catchError(this.utilityService.handleError))
  }

  // create post
  createPost(body: Posts): Observable<Posts> {
    return this._http.post<Posts>(this.baseurl, body).pipe(catchError(this.utilityService.handleError))
  }


}
