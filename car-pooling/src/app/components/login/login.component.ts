import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators,FormsModule,ReactiveFormsModule } from '@angular/forms';
import {Router} from '@angular/router'
import {UserService} from 'src/app/services/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup;
  view: "";
 
 
   constructor(
     private router : Router,
     private formBuilder: FormBuilder, 
     private userService:UserService) { 
        this.loginForm = this.formBuilder.group({
       email: '',
       password: '',
       type: "driver" 
     });
   }
  
 
   ngOnInit(): void {
     const currentUser = this.userService.getCurrentUser() || {}
     console.log(currentUser)
     if(Object.keys(currentUser).length) {
       this.router.navigate([currentUser.type]);
     }
   }
   onSubmit(userLoginInfo) {
     
     if(userLoginInfo.type === 'driver') {
       const driver = {email: userLoginInfo.email, password: userLoginInfo.password}
       this.userService.logInDriver(driver).subscribe((results:any) => {
         if(Object.keys(results).length) {
           this.userService.setCurrentUser(results);
           this.router.navigate([results.type]);
           console.log('success')
         } else {
           this.userService.setCurrentUser(undefined);
           alert("Please verify your email and/or password, and if you don't have an account please sign up!")
         }
       })
     }
     else if(userLoginInfo.type === 'passenger') {
       const passenger = {emailPassenger: userLoginInfo.email, passwordPassenger: userLoginInfo.password}
       this.userService.logInPassenger(passenger).subscribe((results:any) => {
         this.userService.setCurrentUser(results);
         if(Object.keys(results).length) {
           this.router.navigate([results.type]);
           console.log('success')
         } else {
           alert("Please verify your email and/or password, and if you don't have an account please sign up!")
         }
       })
     }
   }
   changeView(option) {
     this.view = option;
   }
 
   signUp(){
     this.router.navigate(['/register'])
   }
 }

