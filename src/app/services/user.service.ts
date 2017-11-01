import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
  private http: Http;

  constructor(http: Http) {
    this.http = http;
  }

  public getUserData(userId: number) {
    return this.http
      .get('http://localhost:3000/user/get')
      .map((res: Response) => res.json());
  }

  public follow(userId: number) {
    console.log('follow -> ' + userId);
  }

  public unfollow(userId: number) {
    console.log('unfollow -> ' + userId);
  }

}
