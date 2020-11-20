import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { TokenStorageService } from '../../services/token-storage.service';
import { DriverService} from '../../services/driver.service';

// DriverService


@Component({
  selector: 'app-driver-render-view',
  templateUrl: './driver-render-view.component.html',
  styleUrls: ['./driver-render-view.component.scss']
})
export class DriverRenderViewComponent implements OnInit {
  data:any;
  carData:any;
  constructor(private router : Router, private tokenStorage: TokenStorageService, private driverService: DriverService) { }

  ngOnInit(): void {
  this.data = this.tokenStorage.getUser();
  console.log(this.data.id)
this.driverService.getOneCar(this.data.id).subscribe((car:any) => {this.carData = car})
setTimeout(
  () => {   
    console.log(this.carData);    
  }, 10
);
}

logout() {
  this.tokenStorage.signOut()
  this.router.navigate(['home']);
}

goProfile(){
  this.router.navigate(['driver']);
}

}
