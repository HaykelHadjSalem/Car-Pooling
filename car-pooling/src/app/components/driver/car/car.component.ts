import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import { TokenStorageService } from '../../../services/token-storage.service';
import { DriverService } from 'src/app/services/driver.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {
  driver:any;
  car:any;
  carForm: FormGroup;
  constructor(private tokenStorage: TokenStorageService, 
    private router : Router, private formBuilder: FormBuilder, private driverService:DriverService) {
    this.carForm = formBuilder.group({
      model:"",
      fuelType :"", 
      color :"", 
      maxSeats: null, 
      VKT : null, 
      VIN : null, 
      driverId : null
    })
  }

  ngOnInit(): void {
    this.driver = this.tokenStorage.getUser();
    this.driverService.getOneCar(this.driver.id).subscribe((car:any) => {  console.log(car) 
      this.car= car})
  }

  onSubmit(carInfo) {
    carInfo.driverId = this.driver.id;
    this.driverService.addCar(carInfo).subscribe(data => {console.log(data)})
    this.router.navigate(['driver']);
}
 
}
