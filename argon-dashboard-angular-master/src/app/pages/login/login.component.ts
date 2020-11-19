<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {Router} from '@angular/router'
=======
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
>>>>>>> e413413b7a4803f6266cc607d9a61e928bdd840a

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  sginInForm : FormGroup;
  constructor(private formBuilder: FormBuilder) { };
  ngOnInit() {
//     this.sginInForm = new FormGroup({          
//       'email':new FormControl(null)
//  })
  }
  ngOnDestroy() {
  }

  login(form) {
    console.log(form.controls['email'].value);
    console.log(form.controls['password'].value);   
     }

}
