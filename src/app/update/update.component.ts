import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../services/post.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  @Input() public data: any;
  public showComments: string = 'none';
  public liked: boolean = false;

  private shownCommentsBefore: boolean = false;
  private shownComments: boolean = false;

  private hasMoreComments: boolean = false;
  private loadingComments: boolean = false;

  private page: number = 1;

  constructor(
    private postService: PostService,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  public toggleComments(show: boolean) {
    if (show) {
      // if (false )
    }
    // this.showComments = show ? '' : 'none';
  }

  public like() {
    if (this.liked) {
      this.postService.like(1);
    } else {
      this.postService.unlike(1);
    }
  }

  public getUpdates() {
    if (false === this.hasMoreComments && false === this.loadingComments) {
      return;
    }
    this.loadingComments = true;
    // this.postService.getUpdates(this.updateId, this.page++)
    //   .subscribe((data) => {
    //     console.log('GOT updates ... ', data);
    //     for (let i in data) {
    //       this.arr.push(data[i]);
    //     }

    //     this.loadingComments = false;
    //   });
  }

}
