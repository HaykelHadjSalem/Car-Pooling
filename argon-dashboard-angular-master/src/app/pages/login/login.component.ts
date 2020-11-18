import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm;
  view: "";
 
 
   constructor(
     private router : Router,
     private formBuilder: FormBuilder, 
     ) { 
        this.loginForm = this.formBuilder.group({
       email: '',
       password: '',
       type: "driver" 
     });
   }
  
 
   ngOnInit(): void {
    
   }
   onSubmit(userLoginInfo) {
     
    
   }
   changeView(option) {
     this.view = option;
   }
 
   signUp(){
     
   }
 }

