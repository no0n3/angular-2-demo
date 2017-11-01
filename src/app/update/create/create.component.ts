import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-update-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  @Output()
  public updatePost: EventEmitter<string> = new EventEmitter<string>();
  public newUpdate: string;
  public loading: boolean = false;

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  public post() {
    if (!this.newUpdate) {
      return;
    }
    this.loading = true;

    let newUpdate: any;
    newUpdate = {
      content: this.newUpdate
    };

    this.postService.createUpdate(this.newUpdate)
      .subscribe((data) => {
        this.updatePost.emit(data)
        this.onPosted();
      });
    // setTimeout(() => {
    //   this.updatePost.emit(this.newUpdate)
    //   this.onPosted();
    // }, 2000);
    // this.comments.push(newComment);
    // this.commentService
    //   .postComment(1, this.newComment)
    //   .subscribe((data) => {
    //     console.log(data)

    //     this.comments.push(data);
    //   });
  }

  private onPosted() {
    this.newUpdate = '';
    this.loading = false;
  }

}
