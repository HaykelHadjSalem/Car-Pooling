import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RideService } from 'src/app/services/ride.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
//adding the ngx lib dropZone (cloudinary)
import { NgxDropzoneModule } from 'ngx-dropzone';
//Services
import { UploadService } from 'src/app/services/uploadService';

@Component({
  selector: 'app-passenger-profile',
  templateUrl: './passenger-profile.component.html',
  styleUrls: ['./passenger-profile.component.scss'],
  providers: [UploadService],
})
export class PassengerProfileComponent implements OnInit {
  passenger: any;
  rides: any[];
  hasRides: boolean = false;


  //cloudinary file name
  title : 'Car-Pooling';
  //two functions implement cloudinary
  constructor(private tokenStorage: TokenStorageService, private router: Router, private rideService: RideService,  private _uploadService: UploadService) { }
  files: File[] = [];
 
 
onSelect(event) {
  console.log(event);
  this.files.push(...event.addedFiles);
}
 
onRemove(event) {
  console.log(event);
  this.files.splice(this.files.indexOf(event), 1);
}

onUpload() {
  //Scape empty array
  if (!this.files[0]) {
    alert('Upload an image first, please');
  }
  //Upload my image to cloudinary
  const file_data = this.files[0];
  const data = new FormData();
  data.append('file', file_data);
  data.append('upload_preset', 'Car-Pooling');
  data.append('cloud_name', 'rebootkamp');

  this._uploadService.uploadImage(data).subscribe((response) => {
    if (response) {
      console.log(response);
    }
  });
}




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
