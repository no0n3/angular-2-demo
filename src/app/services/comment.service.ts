import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CommentService {
  private http: Http;

  constructor(http: Http) {
    this.http = http;
  }

  public postComment(updateId: number, content: string) {
    return this.http
      .get('http://localhost:3000/comment/create')
      .map((res: Response) => res.json());
  }

  public getComments(updateId: number, page: number) {
    if (1 > page) {
      return null;
    }
    console.log('get comments for update ' + updateId);
    return this.http
      .get('http://localhost:3000/comment/get?update_id=' + updateId + '&page=' + page)
      .map((res: Response) => res.json());
  }

}
