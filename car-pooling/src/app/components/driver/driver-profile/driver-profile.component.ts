import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../../services/token-storage.service';
import {Router} from '@angular/router';
import { DriverService } from 'src/app/services/driver.service';
import { AuthService } from 'src/app/services/auth.service';
import {FeedbackService} from 'src/app/services/feedback.service';
import * as moment from 'moment';


@Component({
  selector: 'app-driver-profile',
  templateUrl: './driver-profile.component.html',
  styleUrls: ['./driver-profile.component.scss']
})
export class DriverProfileComponent implements OnInit {
  driver: any;
  feedBack:any;
  file: File = null;


  constructor(private tokenStorage: TokenStorageService,
    private feedbackService: FeedbackService, 
    private authService: AuthService,
    private driverService: DriverService, 
    private router: Router) { } 

   
    
  ngOnInit(): void {
    this.driver = this.tokenStorage.getUser();
    console.log(this.driver)
    this.feedback();
  }

onFileSelected(event){
  this.file = event.addedFiles[0];   //Scape empty array
if (!this.file) {
  alert('Wrong file');
}
}

onRemove(event) {
  this.file = null;
}


onUpload(){
  const data = new FormData();
  data.append('file', this.file);
  data.append('type', 'driver')
  this.authService.uploadImage(this.driver.id, data).subscribe(image => {
    this.driver.imageUrl = image.result.url;
    this.tokenStorage.saveUser(this.driver);
    console.log(image.result.url)
  })
}

feedback(){
  this.feedbackService.getFeedbackDriver(this.driver.id).subscribe((feedback)=> {
    for(var i =0; i < feedback.length; i++) {
      feedback[i].createdAt = moment(feedback[i].createdAt).format('LLL') 
    }
    this.feedBack = feedback;
  })
}

}
