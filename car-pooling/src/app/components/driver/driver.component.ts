import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../services/token-storage.service';
import {Router} from '@angular/router';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { RideService } from 'src/app/services/ride.service';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.scss']
})
export class DriverComponent implements OnInit {
  driver: any;
  rides: any[];
  validatingForm: FormGroup;
  constructor(private tokenStorageService: TokenStorageService, private router : Router, private rideService: RideService) { }

  ngOnInit(): void {
    this.driver = this.tokenStorageService.getUser();
    console.log(this.driver)
    this.rideService.getDriverRides(this.driver.id).subscribe(rides => {console.log(rides) 
      this.rides = rides})
console.log(this.rides)
    this.validatingForm = new FormGroup({
      rideFormModalDeparture: new FormControl('', [Validators.required, Validators.minLength(3)]),
      rideFormModalDestination: new FormControl('', [Validators.required, Validators.minLength(3)]),
      rideFormModalDate: new FormControl('', Validators.required),
      rideFormModalTime: new FormControl('', Validators.required),
      rideFormModalSeats: new FormControl('', Validators.required),
      rideFormModalPrice: new FormControl('', Validators.required),
    });

  }

  get rideFormModalDeparture() {
    return this.validatingForm.get('rideFormModalDeparture');
  }

  get rideFormModalDestination() {
    return this.validatingForm.get('rideFormModalDestination');
  }

  get rideFormModalDate() {
    return this.validatingForm.get('rideFormModalDate');
  }

  get rideFormModalTime() {
    return this.validatingForm.get('rideFormModalTime');
  }
  get rideFormModalSeats() {
    return this.validatingForm.get('rideFormModalSeats');
  }

  get rideFormModalPrice() {
    return this.validatingForm.get('rideFormModalPrice');
  }

}
