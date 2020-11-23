import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators,FormsModule,ReactiveFormsModule } from '@angular/forms';
import {Router} from '@angular/router'
import { TokenStorageService } from '../../services/token-storage.service';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm;


  isLoggedIn : boolean = false;
  isLoginFailed: boolean = false;
 
  
   constructor(
     private router : Router,
     private formBuilder: FormBuilder,
     private tokenStorage: TokenStorageService,
     private authService: AuthService) { 
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
       this.authService.loginDriver(driver).subscribe((results:any) => {
         console.log(results);
         if(results.accessToken) {
           results.driver.type = 'driver';
           this.tokenStorage.saveToken(results.accessToken);
           this.tokenStorage.saveUser(results.driver);
           this.router.navigate(['driver/profile']);
         } else {
           alert("Please verify your email and/or password, and if you don't have an account please sign up!")
         }
       })
     }
     else if(userLoginInfo.type === 'passenger') {
       const passenger = {email: userLoginInfo.email, password: userLoginInfo.password}
       this.authService.loginPassenger(passenger).subscribe((results:any) => {
         console.log(results)
        
         if(results.accessToken) {
           results.passenger.type = 'passenger';
           this.tokenStorage.saveToken(results.accessToken);
           this.tokenStorage.saveUser(results.passenger);
           this.router.navigate(['passenger']);
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



  
 
   signUp(){
     this.router.navigate(['/register'])
   }

   reloadPage(): void {
    window.location.reload();
  }

 }

