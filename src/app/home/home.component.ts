import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private http: Http;
  public arr : string[];
  public loading : boolean = false;

  constructor(http: Http) {
    this.http = http;

    this.getUpdates()
      .subscribe((data) => {
        console.log(data)
        this.arr = data.a;

        this.loading = false;
      });
  }

  private getUpdates() {
    this.loading = true;
    return this.http
      .get('http://localhost:3000/home')
      .map((res: Response) => res.json());
    // .subscribe(
    //   function(resp) {
    //     console.log(resp)
    //     // console.log(arguments)
    //   }, //For Success Response
    //   err => { console.error(err) } //For Error Response
    // );
    // this.http.get('people.json')
    //   // Call map on the response observable to get the parsed people object
    //   .map(res => res.json())
    //   // Subscribe to the observable to get the parsed people object and attach it to the
    //   // component
    //   .subscribe(people => this.people = people);
  }

  ngOnInit() {
  }

}
