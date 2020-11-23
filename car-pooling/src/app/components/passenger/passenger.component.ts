import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RideService } from 'src/app/services/ride.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-passenger',
  templateUrl: './passenger.component.html',
  styleUrls: ['./passenger.component.scss']
})
export class PassengerComponent implements OnInit {
  user: any;
  searchForm: FormGroup;
  results: any[];
  activateResults: boolean = false;
  constructor(private tokenStorage: TokenStorageService, private router: Router, private formBuilder: FormBuilder, private rideservice: RideService) {
    this.searchForm = this.formBuilder.group({
      departure: '',
      destination: '' 
    });
  }

  ngOnInit(): void {
    if(this.tokenStorage.getUser() && this.tokenStorage.getUser().type === 'passenger') {
      this.user = this.tokenStorage.getUser()
    } else {
      this.router.navigate(['home']);
    }
    console.log(this.user)
  }
  onSubmit(query): void {
    query.passengerId = this.user.id;
    console.log(query);
    this.rideservice.getSearchedRides(query).subscribe(results => {
      console.log(results)
      this.results = results;
      this.activateResults = true;
    })
  }

}
