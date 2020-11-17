import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input()
  destination: string; 
  deparature: string;
  date: Date;
  time: String;
  

  constructor(private http: HttpClient) { }

  ngOnInit() {}

  allInfos:any = [];

  
}

  
