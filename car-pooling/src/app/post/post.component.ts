import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {

  constructor(private http: HttpClient) { }

  getFeed(option) {
    return this.http.post('http://localhost:4200', option)
  }
}
