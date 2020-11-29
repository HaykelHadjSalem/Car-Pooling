import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../../services/token-storage.service';
import {Router} from '@angular/router';
import { DriverService } from 'src/app/services/driver.service';
import { Observable } from 'rxjs';
const uri = 'http://localhost:3000/file/upload';
import { NgxDropzoneModule } from 'ngx-dropzone';


@Component({
  selector: 'app-driver-profile',
  templateUrl: './driver-profile.component.html',
  styleUrls: ['./driver-profile.component.scss']
})
export class DriverProfileComponent implements OnInit {
  driver: any;
  files: File[] = [];
  selectedFile: File = null;

  constructor(private tokenStorage: TokenStorageService, 
    private driverService: DriverService, 
    private router: Router) { } 

   
    
  ngOnInit(): void {
    this.driver = this.tokenStorage.getUser();
    console.log(this.driver)
  }

onFileSelected(event){
this.files.push(...event.addedFiles);   //Scape empty array
if (!this.files[0]) {
  alert('Wrong file');
}
}

onRemove(event) {
  console.log(event);
  this.files.splice(this.files.indexOf(event), 1);
}


onUpload(){
  const file_data = this.files[0];
  const data = new FormData();
  data.append('file', file_data);
  console.log(data)
  data.append('upload_preset', 'ml_default');
  data.append('cloud_name', 'dc36tjyia');
  this.driver.type = "driver"
  this.driverService.uploadImage(this.driver, data).subscribe(image => {
    this.driver.imageUrl = image.result.url;
    this.tokenStorage.saveUser(this.driver);
    console.log(image.result.url)
  })
}


}
