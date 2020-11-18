import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

  @Injectable({
    providedIn: 'root'
  })
  export class UserService { 
  
    currentUser: any;
    private passengerUrl = 'http://localhost:3000/api/passenger';
    private driverUrl = "http://localhost:3000/api/driver";
  
    constructor(private http: HttpClient) { }


   public getAllPassengers() {
      return this.http.get(this.passengerUrl);
   }
  
  
 public getAllDrivers() {
    return this.http.get(this.driverUrl);
  }
  
//add a new  passenger user

public addNewPassenger(options){
    return this.http.post(this.passengerUrl + '/add', options)
}

//add a new  driver user

public addNewDriver(options){
    return this.http.post(this.driverUrl + '/add', options)
}

   // log in passenger
  
   public logInPassenger(options){
    return this.http.post(this.passengerUrl+ '/login', options)
  }
  
    // log in driver 
  
    public logInDriver(options){
      return this.http.post(this.driverUrl + '/login', options)
    }
  

  public setCurrentUser(user: any) {
    this.currentUser = user;
  }
  public getCurrentUser() {
    return this.currentUser;
  }
  
  }