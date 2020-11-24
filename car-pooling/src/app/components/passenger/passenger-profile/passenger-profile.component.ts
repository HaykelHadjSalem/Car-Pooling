import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RideService } from 'src/app/services/ride.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';


@Component({
  selector: 'app-passenger-profile',
  templateUrl: './passenger-profile.component.html',
  styleUrls: ['./passenger-profile.component.scss']
})
export class PassengerProfileComponent implements OnInit {
  passenger: any;
  rides: any[];
  hasRides: boolean = false;
  constructor(private tokenStorage: TokenStorageService, private router: Router, private rideService: RideService) { }

  ngOnInit(): void {
    
    if(this.tokenStorage.getUser() && this.tokenStorage.getUser().type === 'passenger') {
      this.passenger = this.tokenStorage.getUser();
      this.rideService.getPassengerRides(this.passenger.id).subscribe((results:any[]) => {
        console.log(results);
        this.rides = results;
        this.hasRides = true;
      });
    }
  }

}
