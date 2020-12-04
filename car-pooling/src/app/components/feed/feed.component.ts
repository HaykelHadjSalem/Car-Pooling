import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RideService } from '../../services/ride.service';
import { DriverService} from '../../services/driver.service';
 

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
obj= {rideId : 0, passengerId : 0}
  @Input() rides: any[];
  @Input() user: any;
  @Input() driver: any[];
  constructor( private router: Router, private rideService: RideService, private driverService: DriverService) {}
   
  ngOnInit() {

    //    this.rideService.getAllRides().subscribe(rides=>{
    //   this.allRides = rides
    //   console.log(rides)
     
    // })
  }
  reserve(rideId) {
    console.log(this.user)
    this.rideService.reserveRide({rideId: rideId, passengerId: this.user.id}).subscribe(results => {
    console.log(results);
    this.router.navigate(['passenger/profile'])
   
    })
  }

//   viewProfile(){
//  this.driverService.currentDriver = this.rides[0].driver
//     this.router.navigate(['passenger/profile'])
//   }

}





