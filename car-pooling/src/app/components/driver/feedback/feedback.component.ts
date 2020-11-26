import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FeedbackService } from 'src/app/services/feedback.service';
import { RideService } from 'src/app/services/ride.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
  passengers: any[];
  message: any[] = [];
  rideId: number;
  constructor(private router: Router, private route: ActivatedRoute, private rideService: RideService,
    private tokenStorageService: TokenStorageService, private feedbackService: FeedbackService) { }

  ngOnInit(): void {
    this.rideId = +this.route.snapshot.paramMap.get('id');
    this.rideService.getRidePassengers(this.rideId).subscribe(passengers => {
      console.log(passengers);
      this.passengers = passengers;
    })
  }

  sendFeedback(passengerId, i) {
    const driverId = this.tokenStorageService.getUser().id;
    console.log(passengerId, this.message, driverId, this.rideId);
    const feedback = {
      rideId: this.rideId,
      driverId: driverId,
      passengerId: passengerId,
      message: this.message[i],
      sender: 'driver',
      rated: false
    }
    this.message = [];
    this.passengers = this.passengers.filter(passenger => passenger.id !== passengerId);
    if(!this.passengers.length) feedback.rated = true;
    this.feedbackService.addFeedback(feedback).subscribe(result => {
      console.log(result);
    })
    if(feedback.rated) this.router.navigate(['driver/profile'])
  }

}
