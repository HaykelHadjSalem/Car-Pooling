import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router  } from '@angular/router';
import { DriverService } from 'src/app/services/driver.service';
import { Location } from '@angular/common';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import {FeedbackService} from 'src/app/services/feedback.service';
import * as moment from 'moment';

@Component({
  selector: 'app-driver-detail',
  templateUrl: './driver-detail.component.html',
  styleUrls: ['./driver-detail.component.scss']
})
export class DriverDetailComponent implements OnInit {
Driver : any;
feedBack:any;
car:any;
passenger : any;
  constructor(private driverService : DriverService, 
    private route: ActivatedRoute, 
    private router: Router, 
    private location: Location, 
    private feedbackService: FeedbackService,
    private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
this.getDriver()
this.passenger = this.tokenStorage.getUser()
  }
  
getDriver(){
  const id = +this.route.snapshot.paramMap.get('id');
  console.log(id)
  this.driverService.getDriver(id).subscribe(driver => {console.log(driver) 
    this.Driver = driver});
this.feedbackService.getFeedbackDriver(id).subscribe(feedback =>  {
  for(var i =0; i < feedback.length; i++) {
    feedback[i].createdAt = moment(feedback[i].createdAt).format('LLL') 
  }
  this.feedBack= feedback});


this.driverService.getOneCar(id).subscribe((car:any) => { 
  this.car= car})
}

goBack(): void {
  this.location.back();
}

}
