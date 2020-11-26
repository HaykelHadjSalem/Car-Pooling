import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router  } from '@angular/router';
import { DriverService } from 'src/app/services/driver.service';
import { Location } from '@angular/common';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-driver-detail',
  templateUrl: './driver-detail.component.html',
  styleUrls: ['./driver-detail.component.scss']
})
export class DriverDetailComponent implements OnInit {
Driver : any;
passenger : any;
  constructor(private driverService : DriverService, 
    private route: ActivatedRoute, 
    private router: Router, 
    private location: Location, 
    private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
this.getDriver()
this.passenger = this.tokenStorage.getUser()
  }
  
getDriver(){
  const id = +this.route.snapshot.paramMap.get('id');
  console.log(id)
  this.driverService.getDriver(id).subscribe(hero =>  this.Driver = hero);

}

goBack(): void {
  this.location.back();
}

}
