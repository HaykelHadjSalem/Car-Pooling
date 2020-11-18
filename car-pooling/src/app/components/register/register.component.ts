import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  signupForm;
  constructor(private formBuilder: FormBuilder, private userService: UserService, private authService: AuthService) { 
    this.signupForm = this.formBuilder.group({
      firstName : "",
      lastName : "",
      email : "",
      password : "",
      confirmPassword : "",
      address : "",
      phoneNumber : 0,
      idCard : 0,
      driverLicense : 0,
      type : "driver"
    })
  }



  ngOnInit(): void {

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
    ICN : userInfo.idCard,
    driverLicense : userInfo.driverLicense,
  }

  const passengerInfo = {
    type : userInfo.type,
    firstName : userInfo.firstName,
    lastName : userInfo.lastName,
    email : userInfo.email,
    password : userInfo.password,
    address : userInfo.address,
    phoneNumber : userInfo.phoneNumber,
    ICN : userInfo.idCard,
  }

  if(userInfo.type === "driver") {
    this.authService.register(driverInfo).subscribe((driver : any)=>{
      if(driver.message){
        alert(driver.message)
        return;
      }
      console.log("account successfully created", driver);
    })
  }else{
    this.userService.register(passengerInfo).subscribe((passenger:any)=>{
      if(passenger.message){
        alert(passenger.message)
      return;
    } 
     console.log("account successfully created", passenger);
    })
  }
}



}
