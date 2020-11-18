import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  register(form) {
    console.log(form.controls['firstName'].value);
    console.log(form.controls['lastName'].value);   
    console.log(form.controls['email'].value);
    console.log(form.controls['password'].value);
    console.log(form.controls['confirmPassword'].value);
    console.log(form.controls['address'].value);
    console.log(form.controls['phoneNumber'].value);  
    console.log(form.controls['idCard'].value);
    console.log(form.controls['driverLicenceNumber'].value);    
     }

}
