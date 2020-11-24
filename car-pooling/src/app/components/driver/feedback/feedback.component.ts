import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RideService } from 'src/app/services/ride.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
  passengers: any[];
  constructor(private router: Router, private route: ActivatedRoute, private rideService: RideService) { }

  ngOnInit(): void {
    const rideId = +this.route.snapshot.paramMap.get('id');
    this.rideService.getRidePassengers(rideId).subscribe(passengers => {
      console.log(passengers);
      this.passengers = passengers;
    })
  }

}
