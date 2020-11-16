import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RideService } from '../../services/ride.service';
interface Feed {destination: string; 
                deparature: string;
                date: String;
                time: String;
                price: Number;
                seats: Number } 

// const FEED: Feed[] = [{destination:'Tunis', deparature:'Sousse', date: '02/02/2023', time: '22:45' ,seats: 3, price: 25}];

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  // allInfos:any = [{destination:'', deparature:'', date:'date', time:'time',seats: 'number', price: 'price'}];
  // feed: Feed[] = []

  allRides:any 
 
  constructor( private router: Router, private route: ActivatedRoute, private rideService: RideService) {}



  
  
  
  ngOnInit() {

    this.allRides = [
      
      { destination: 'tunis',
        deparature: 'sousse',
        time:'15:52',
        date: '20/2/2023',
        price: 30
      },
      { destination: 'tunis',
        deparature: 'sousse',
        time:'15:52',
        date: '20/2/2023',
        price: 30
      },
      { destination: 'tunis',
        deparature: 'sousse',
        time:'15:52',
        date: '20/2/2023',
        price: 30
      }
    ]
   
  
 

  
    this.rideService.getAllRides().subscribe(rides=>{
      this.allRides = rides
      console.log(rides)
     
    })
  }
}





