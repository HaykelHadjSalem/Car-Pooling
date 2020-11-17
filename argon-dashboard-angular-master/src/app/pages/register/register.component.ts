import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  signupForm : FormGroup;
  constructor(private formBuilder: FormBuilder) {
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

  ngOnInit() {
  }

}
