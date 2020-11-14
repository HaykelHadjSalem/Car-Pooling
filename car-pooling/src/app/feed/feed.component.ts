import { Component, OnInit } from '@angular/core';
import { PostComponent } from '../post/post.component';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  alloInfo:any = [];
  
  
  constructor(private post: PostComponent) { }

  ngOnInit() {
  }

  //  const date =this.router.snapshot.paramMap.get('date');
  //   if(!date || date===undefined){
  //     this.router.navigate(["/passanger"])
  //   }

  //   console.log(date)
  //   this.post.getFeed({date}).subscribe(info=>{
  //     this.allInfos = info
  //     console.log(info)
     
  //   })

}
