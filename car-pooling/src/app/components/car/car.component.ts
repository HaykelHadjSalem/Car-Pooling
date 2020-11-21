import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import { TokenStorageService } from '../../services/token-storage.service';
import {UserService} from 'src/app/services/user.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {
  data:any;
  obj = {
    model:"",
  fuelType :"", 
  color :"", maxSeats: 0, VKT : 0, VIN : 0, driverId : 0};
  constructor(private tokenStorage: TokenStorageService,  private userService:UserService, private router : Router) { }

  ngOnInit(): void {
    this.data = this.tokenStorage.getUser();
    
  }

  onSubmit(form: NgForm) {
    this.obj.model= form.value['Model'];
    this.obj.fuelType = form.value['fuelType'];
    this.obj.color = form.value['color'];
    this.obj.VKT = form.value['VKT'];
    this.obj.VIN = form.value['VIN']
    this.obj.maxSeats = form.value['seats'];
    this.obj.driverId = this.data.id
    this.userService.addCar(this.obj).subscribe(data => {console.log(data)})
    this.router.navigate(['rides']);
}
 
}
