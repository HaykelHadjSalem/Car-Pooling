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
  driver:any;
  carData:any;
  
  constructor(private router : Router, private tokenStorage: TokenStorageService, private driverService: DriverService) { }

  ngOnInit(): void {
  this.driver= this.tokenStorage.getUser();
this.driverService.getOneCar(this.driver.id).subscribe((car:any) => {  console.log(car) 
  this.carData = car})
}

logout() {
  this.tokenStorage.signOut()
  this.router.navigate(['home']);
}

goProfile(){
  this.router.navigate(['driver']);
}

}
