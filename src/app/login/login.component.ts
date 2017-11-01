import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from '../user/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public logged: boolean;

  constructor(private as: AuthService) {
    this.logged = as.isLoggedIn();
  }

  ngOnInit() {
  }

  public login() {
    let user = new User(1, 'Bok');
    this.as.loginAs(user);
    // this.as.setLoggedIn();
    this.logged = this.as.isLoggedIn();
  }

}
