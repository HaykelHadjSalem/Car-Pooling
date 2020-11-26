import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RideService } from 'src/app/services/ride.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import {FeedbackService} from 'src/app/services/feedback.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-passenger-profile',
  templateUrl: './passenger-profile.component.html',
  styleUrls: ['./passenger-profile.component.scss']
})

export class PassengerProfileComponent implements OnInit {
  obj={comment :"", driverId : 0, rideId : 0, passengerId : 0, sender : 'passenger', rating : 0}
  passenger: any;
  rides: any[];
  rating:any[];
  hasRides: boolean = false;
  constructor(private tokenStorage: TokenStorageService,
     private router: Router,
     private feedbackService: FeedbackService,
      private rideService: RideService) { }

  ngOnInit(): void {   
      this.passenger = this.tokenStorage.getUser();
      this.rideService.getPassengerRides(this.passenger.id).subscribe((results:any[]) => {
        console.log(results);
        this.rides = results;
        this.hasRides = true;
      });
  }

  onSubmit(form: NgForm, rideId, driverId){
    this.obj.comment = form.value['comment']
this.obj.driverId = driverId;
this.obj.rideId = rideId;
this.obj.passengerId = this.passenger.id
this.rating= [...form.value['rating1'],...form.value['rating2'],...form.value['rating3'],...form.value['rating4'],...form.value['rating5']];
for(var i=0; i < this.rating.length ; i++){
  if(this.rating[i] !== ''){
    this.obj.rating = this.rating[i]
  }
}
  console.log(this.obj)
}  

}
