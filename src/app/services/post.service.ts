import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostService {

  constructor(private http: Http) { }

  public createUpdate(content: string) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
console.log('_____________________f')
    return this.http
      .post('http://localhost:3000/update/create', {}, options)
      .map((res: Response) => res.json());
  }

  public like(updateId: number) {
    console.log('like update -> ' + updateId)
  }

  public unlike(updateId: number) {
    console.log('unlike update -> ' + updateId)
  }

  public getUpdates(userId: number, page: number) {
    if (1 > page) {
      return null;
    }

    console.log('get updates for user ' + userId);
    return this.http
      .get('http://localhost:3000/update/get?user_id=' + userId + '&page=' + page)
      .map((res: Response) => res.json());
  }

}
