import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators,FormsModule,ReactiveFormsModule } from '@angular/forms';
import {Router} from '@angular/router'
import {UserService} from 'src/app/services/user.service';
import { TokenStorageService } from '../../services/token-storage.service';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup;
  view: "";


  isLoggedIn : boolean = false;
  isLoginFailed: boolean = false;
 
  
   constructor(
     private router : Router,
     private formBuilder: FormBuilder,
     private tokenStorage: TokenStorageService,
     private authService: AuthService, 
     private userService:UserService) { 
        this.loginForm = this.formBuilder.group({
       email: '',
       password: '',
       type: "driver" 
     });
   }
  
 
   ngOnInit(): void {
    //  const currentUser = this.userService.getCurrentUser() || {}
    //  console.log(currentUser)
    //  if(Object.keys(currentUser).length) {
    //    this.router.navigate([currentUser.type]);
    //  }
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
    }
  
   }
   onSubmit(userLoginInfo) {
      console.log(this.loginForm.value)
     if(userLoginInfo.type === 'driver') {
       const driver = {email: userLoginInfo.email, password: userLoginInfo.password}
       this.authService.login(driver).subscribe((results:any) => {
         console.log(results);
         this.tokenStorage.saveToken(results.accessToken);
        this.tokenStorage.saveUser(results.driver);
        this.router.navigate(['driver-view']);
         if(Object.keys(results).length) {
           this.userService.setCurrentUser(undefined);
           alert("Please verify your email and/or password, and if you don't have an account please sign up!")
         }
       })
     }
     else if(userLoginInfo.type === 'passenger') {
       const passenger = {email: userLoginInfo.email, password: userLoginInfo.password}
       this.userService.login(passenger).subscribe((results:any) => {
        this.tokenStorage.saveToken(results.accessToken);
         this.userService.setCurrentUser(results);
         if(Object.keys(results).length) {
           this.router.navigate(['driver-view']);
           console.log('success')
         } else {
           alert("Please verify your email and/or password, and if you don't have an account please sign up!")
         }
       })
     }
   }

  //  onSubmit(): void {
  //   this.authService.login(this.form).subscribe(
  //     data => {
  //       this.tokenStorage.saveToken(data.accessToken);
  //       this.tokenStorage.saveUser(data);

  //       this.isLoginFailed = false;
  //       this.isLoggedIn = true;
  //       this.reloadPage();
  //     },
  //     err => {
  //       this.errorMessage = err.error.message;
  //       this.isLoginFailed = true;
  //     }
  //   );
  // }



   changeView(option) {
     this.view = option;
   }
 
   signUp(){
     this.router.navigate(['/register'])
   }

   reloadPage(): void {
    window.location.reload();
  }

 }

