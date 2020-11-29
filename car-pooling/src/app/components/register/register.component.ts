import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  signupForm: FormGroup;

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
      type : "passenger"
    })
  }



  ngOnInit(): void {
    this.signupForm = new FormGroup({
      password : new FormControl('', Validators.compose([
        Validators.minLength(6),
        Validators.required,
        Validators.pattern(/A-Za-z0-9/), // <-- Allow uppercase and lowercase letters and numbers 
      ])),
      email: new FormControl('', [Validators.required, Validators.email]),
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required]),
      idCard: new FormControl('', [Validators.required,Validators.minLength(6)]),
      type: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required,Validators.minLength(8)]),
      driverLicense: new FormControl('', [Validators.required,Validators.minLength(10)]),
 })
}

get password() { return this.signupForm.get('password');
}
get confirmPassword() { return this.signupForm.get('confirmPassword');
}
get email() { return this.signupForm.get('email');
}

get firstName() { return this.signupForm.get('firstName');
}
get lastName() { return this.signupForm.get('lastName');
}
get idCard() { return this.signupForm.get('idCard');
}
get phoneNumber() { return this.signupForm.get('phoneNumber');
}
get driverLicense() { return this.signupForm.get('driverLicense');
}
get address() { return this.signupForm.get('address');
}
get type() { return this.signupForm.get('type');
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
