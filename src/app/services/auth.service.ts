import { Injectable } from '@angular/core';
import { User } from '../user/user.model';

@Injectable()
export class AuthService {
  private isLogged: boolean;
  private user: User = null;

  constructor() { }

  public isLoggedIn(): boolean {
    return this.user instanceof User;//this.isLogged;
  }

  public loginAs(user: User) {
    this.user = user;
  }

  public setLoggedIn() {
    this.isLogged = true;
  }

  public isLoggedInAs(userId: number): boolean {
    return this.isLoggedIn() && userId === this.user.getId();
  }

}
