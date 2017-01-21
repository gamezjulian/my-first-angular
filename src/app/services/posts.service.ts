import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { IPost } from '../interfaces/ipost';

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';


@Injectable()
export class PostsService {

  constructor(private _http: Http) { }

  getPosts(): Observable<Array<IPost>> {
    return this._http.get("https://jsonplaceholder.typicode.com/posts")
      .map(r => <Array<IPost>>r.json())
      .do(x => console.log("There was an error calling the url :" + JSON.stringify(x)))
      .catch(this.errorHandler);
  }

  private errorHandler(error: Response) {
    return Observable.throw(error.json);
  }
}
