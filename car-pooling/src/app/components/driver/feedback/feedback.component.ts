import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RideService } from 'src/app/services/ride.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
  passengers: any[];
  message: string;
  rideId: number;
  constructor(private router: Router, private route: ActivatedRoute, private rideService: RideService, private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.rideId = +this.route.snapshot.paramMap.get('id');
    this.rideService.getRidePassengers(this.rideId).subscribe(passengers => {
      console.log(passengers);
      this.passengers = passengers;
    })
  }

  sendFeedback(passengerId) {
    const driverId = this.tokenStorageService.getUser().id;
    console.log(passengerId, this.message, driverId, this.rideId);
    const feedback = {
      rideId: this.rideId,
      driverId: driverId,
      passengerId: passengerId,
      message: this.message,
      sender: 'driver'
    }
  }

}
