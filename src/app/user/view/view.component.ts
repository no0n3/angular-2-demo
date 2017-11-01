import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { PostService } from '../../services/post.service';
import { AuthService } from '../../services/auth.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-user-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class UserViewComponent implements OnInit {
  private http: Http;
  public arr: any[] = [];
  public loading: boolean = false;
  public loadingUpdates: boolean = false;

  private userId: number;
  public following: boolean = false;
  public loggedUser: boolean = true;

  private page: number = 1;
  private hasMoreUpdates: boolean = true;

  constructor(
    http: Http,
    private route: ActivatedRoute,
    private userService: UserService,
    private postService: PostService,
    private authService: AuthService
  ) {
    this.http = http;
    // console.log('-------ffffffff')
  }

  public getUpdates() {
    if (false === this.hasMoreUpdates && false === this.loadingUpdates) {
      return;
    }
    this.loadingUpdates = true;
    this.postService.getUpdates(this.userId, this.page++)
      .subscribe((data) => {
        console.log('GOT updates ... ', data);
        // console.log('GET DATAAAAAAAAAA')
        // console.log(data)
        // this.arr = data.a;
        for (let i in data) {
          this.arr.push(data[i]);
        }

        this.loadingUpdates = false;
        // this.loading = false;
      });
    // this.loading = true;
    // return this.http
    //   .get('http://localhost:3000/home')
    //   .map((res: Response) => res.json());
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = +params['id'];
      console.log('UID: ' + this.userId)
      this.loggedUser = this.authService.isLoggedInAs(this.userId);
      this.getUserData(this.userId);

      this.getUpdates();
      // this.getUpdates()
      //   .subscribe((data) => {
      //     console.log('GET DATAAAAAAAAAA')
      //     console.log(data)
      //     this.arr = data.a;

      //     // this.loading = false;
      //   });
    });
  }

  private getUserData(userId) {
    this.loading = true;
    this.userService.getUserData(userId)
      .subscribe((data) => {
        this.following = data.following;
        var userData = data;
        console.log('UxD: ', userData)

        this.loading = false;
      });
  }

  updatePosted(event) {
    console.log('--DF-', event);
    this.arr.unshift(event);
    // this.arr.unshift({
    //   "content": event,
    //   "user_id":1,
    //   "likes":43,
    //   "comments":54,
    //   "commentsData": [
    //     {"content":"gg cXXXXXX"},
    //     {"content":"gg c 444"}
    //   ]
    // });
  }

  follow() {
    if (true === this.loggedUser) {
      return;
    }

    if (this.following) {
      this.userService.unfollow(this.userId);
      this.following = false;
    } else {
      this.userService.follow(this.userId);
      this.following = true;
    }
  }

}
