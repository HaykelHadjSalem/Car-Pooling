import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router  } from '@angular/router';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { RideService } from 'src/app/services/ride.service';
import {FeedbackService} from 'src/app/services/feedback.service';
import * as moment from 'moment';



@Component({
  selector: 'app-passenger-detail',
  templateUrl: './passenger-detail.component.html',
  styleUrls: ['./passenger-detail.component.scss']
})
export class PassengerDetailComponent implements OnInit {
  Driver : any;
  feedBack:any;
  passenger : any;

  constructor( 
    private route: ActivatedRoute,
    private rideService : RideService,
     private feedbackService: FeedbackService,
     private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
const id = +this.route.snapshot.paramMap.get('id');
this.Driver = this.tokenStorage.getUser()
this.rideService.getPassenger(id).subscribe(passenger =>  this.passenger = passenger);
this.feedbackService.getFeedbackPassenger(id).subscribe(feedback =>  this.feedBack= feedback);
  }

}
