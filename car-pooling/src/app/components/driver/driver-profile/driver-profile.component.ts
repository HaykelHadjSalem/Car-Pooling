import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../../services/token-storage.service';
import {Router} from '@angular/router';
import { DriverService } from 'src/app/services/driver.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-driver-profile',
  templateUrl: './driver-profile.component.html',
  styleUrls: ['./driver-profile.component.scss']
})
export class DriverProfileComponent implements OnInit {
  driver: any;
  files: File = null;


  constructor(private tokenStorage: TokenStorageService, 
    private authService: AuthService,
    private driverService: DriverService, 
    private router: Router) { } 

   
    
  ngOnInit(): void {
    this.driver = this.tokenStorage.getUser();
    console.log(this.driver)
  }

onFileSelected(event){
  this.files = event.addedFiles[0];   //Scape empty array
if (!this.files) {
  alert('Wrong file');
}
}

onRemove(event) {
  this.files = null;
}


onUpload(){
  const data = new FormData();
  data.append('file', this.files);
  data.append('type', 'driver')
  this.authService.uploadImage(this.driver.id, data).subscribe(image => {
    this.driver.imageUrl = image.result.url;
    this.tokenStorage.saveUser(this.driver);
    console.log(image.result.url)
  })
}


}
