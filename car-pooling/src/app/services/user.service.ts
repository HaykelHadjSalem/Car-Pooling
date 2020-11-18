import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


const passengerUrl = 'http://localhost:3000/passenger/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

  @Injectable({
    providedIn: 'root'
  })
  export class UserService { 
  
    currentUser: any;
 
    private driverUrl = "http://localhost:3000/driver";
  
    constructor(private http: HttpClient) { }



  
  
 public getAllDrivers() {
    return this.http.get(this.driverUrl);
  }
  
//add a new  passenger user

register(driver): Observable<any> {
  return this.http.post(passengerUrl + 'register', {
    firstName: driver.firstName,
    lastName : driver.lastName,
    email: driver.email,
    ICN : driver.ICN,
    address: driver.address,
    phoneNumber: driver.phoneNumber,
    password: driver.password
  });
}

//add a new  driver user

public addNewDriver(options){
    return this.http.post(this.driverUrl + '/add', options)
}

   // log in passenger
  
   login(credentials): Observable<any> {
    return this.http.post(passengerUrl+ 'login', {
      email: credentials.email,
      password: credentials.password
    }, httpOptions);
  }
  
    // log in driver 
  
    public logInDriver(options){
      return this.http.post(this.driverUrl + '/login', options)
    }
  

  public setCurrentUser(user: any) {
    this.currentUser = [user.driver];
  }
  public getCurrentUser() {
    return this.currentUser;
  }
  
  }