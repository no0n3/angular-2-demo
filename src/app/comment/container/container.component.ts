import { Component, OnInit, Input } from '@angular/core';
import { Http, Response } from '@angular/http';
import { CommentService } from '../../services/comment.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  @Input() public comments: any[];
  public x: string[];
  private commentService: CommentService;
  public newComment: string;

  constructor(commentService: CommentService, private http: Http) {
    this.commentService = commentService;

    this.http
      .get(
        'http://localhost:56787/api/dick-butt'
        // 'http://localhost:65378/api/values'
      )
      .map((res: Response) => res.json())
      .subscribe((data) => {
        console.log(data)

        this.x = data;
      });
  }

  ngOnInit() {
  }

  public postComment() {
    if (!this.newComment) {
      return;
    }
  
    let newComment: any;
    newComment = {
      content: this.newComment
    };

    // this.comments.push(newComment);
    this.commentService
      .postComment(1, this.newComment)
      .subscribe((data) => {
        console.log(data)

        this.comments.push(data);
      });
  }

}
