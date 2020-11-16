import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  signupForm : FormGroup;
  constructor(private formBuilder: FormBuilder, private userService: UserService) { 
    this.signupForm = this.formBuilder.group({
      firstName : "",
      lastName : "",
      email : "",
      password : "",
      confirmPassword : "",
      address : "",
      phoneNumber : "",
      idCard : "",
      driverLicenceNumber : "",
      type : "driver"
    })
  }

  ngOnInit(): void {
    this.userService.getAllPassengers().subscribe((passengers: any[])=>{
      console.log(passengers)
  })
  this.userService.getAllDrivers().subscribe((drivers: any[])=>{
    console.log(drivers)
  })
 }
 
onSubmit(userInfo){
  console.log(userInfo);
  const driverInfo = {
    type : userInfo.type,
    firstName : userInfo.firstName,
    lastName : userInfo.lastName,
    email : userInfo.email,
    password : userInfo.password,
    address : userInfo.address,
    phoneNumber : userInfo.phoneNumber,
    idCard : userInfo.idCard,
    driverLicenceNumber : userInfo.driverLicenceNumber,
  }
  console.log(userInfo);
  const passengerInfo = {
    type : userInfo.type,
    firstName : userInfo.firstName,
    lastName : userInfo.lastName,
    email : userInfo.email,
    password : userInfo.password,
    address : userInfo.address,
    phoneNumber : userInfo.phoneNumber,
    idCard : userInfo.idCard,
  }

  if(userInfo.type === "driver") {
    this.userService.addNewDriver(driverInfo).subscribe((driver : any)=>{
      if(driver.message){
        alert(driver.message)
        return;
      }
      console.log("account successfully created", driver);
    })
  }else{
    this.userService.addNewPassenger(passengerInfo).subscribe((passenger:any)=>{
      if(passenger.message){
        alert(passenger.message)
      return;
    } 
     console.log("account successfully created", passenger);
    })
  }
}



}
