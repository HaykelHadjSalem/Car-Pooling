import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {Router} from '@angular/router';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  checkedPassword: string = ''
  signupForm;
  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService, private tokenStorage: TokenStorageService) { 
    this.signupForm = this.formBuilder.group({
      firstName : "",
      lastName : "",
      email : "",
      password : "",
      confirmPassword : "",
      address : "",
      phoneNumber : null,
      idCard : null,
      driverLicense : null,
      type : "driver"
    })
  }



  ngOnInit(): void {

 }

 checkPassword($event) {
  //  console.log(this.signupForm)
if(this.signupForm.value.password !== this.signupForm.value.confirmPassword) {
    this.checkedPassword = 'Passwords must match';
  } else {
    this.checkedPassword = '';
  }
 }
 
onSubmit(userInfo){
  console.log(userInfo);
  if(this.checkedPassword === 'Passwords must match') return;
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
    this.authService.registerDriver(driverInfo).subscribe((results : any)=>{
      if(results.message){
        alert(results.message)
        return;
      }
      console.log("account successfully created", results);
      results.driver.type = 'driver';
      this.tokenStorage.saveToken(results.accessToken);
      this.tokenStorage.saveUser(results.driver);
      this.router.navigate(['driver']);
    })
  }else{
    this.authService.registerPassenger(passengerInfo).subscribe((results:any)=>{
      if(results.message){
        alert(results.message)
      return;
    } 
     console.log("account successfully created", results);
     results.passenger.type = 'passenger';
     this.tokenStorage.saveToken(results.accessToken);
     this.tokenStorage.saveUser(results.passenger);
     this.router.navigate(['passenger']);
    })
  }
}



}
