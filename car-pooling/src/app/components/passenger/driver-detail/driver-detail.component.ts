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
  this.driverService.getDriver(id).subscribe(driver =>  this.Driver = driver);
this.feedbackService.getFeedbackDriver(id).subscribe(feedback =>  this.feedBack= feedback);
this.feedBack = this.feedBack.sort({createdAt: -1})
}

goBack(): void {
  this.location.back();
}

}
