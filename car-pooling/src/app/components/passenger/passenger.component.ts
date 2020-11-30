import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RideService } from 'src/app/services/ride.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-passenger',
  templateUrl: './passenger.component.html',
  styleUrls: ['./passenger.component.scss']
})
export class PassengerComponent implements OnInit {
  user: any;
  rides: any[];
  selectedDeparture: string;
  selectedDestination: string;
  selectedDate: string;
  results: any[];
  resultRides: any[] = [];
  ridesLoading: boolean = false;
  
  constructor(private tokenStorage: TokenStorageService, private router: Router, private rideservice: RideService) { }

  ngOnInit(): void {
    if(this.tokenStorage.getUser() && this.tokenStorage.getUser().type === 'passenger') {
      this.user = this.tokenStorage.getUser()
    } else {
      this.router.navigate(['home']);
    }
    // console.log(this.user)
    this.rideservice.getAllRides(this.user.id).subscribe((rides: any[]) => {
      console.log(rides)
      this.rides = rides;
      // this.results = rides
      this.loadRides();
    })
  }

  getRides(term: string = null): Observable<any[]> {
    let rides = this.rides;
        if (term) {
            rides = rides.filter(ride => ride.departure.toLocaleLowerCase().indexOf(term.toLocaleLowerCase()) > -1);
        }
        return of(rides).pipe(delay(500));
  }

  loadRides() {
    this.ridesLoading = true;
    this.getRides().subscribe(rides => {
        this.resultRides = rides;
        this.ridesLoading = false;
    });
  }

  check() {
    if(this.selectedDeparture) {
      this.results = this.rides.filter(ride => ride.departure === this.selectedDeparture)
      if(this.selectedDestination) this.results = this.results.filter(ride => ride.destination === this.selectedDestination); 
      if(this.selectedDate) this.results = this.results.filter(ride => ride.date === this.selectedDate); 
    } else {
      this.results = this.rides;
    }
  }
}
