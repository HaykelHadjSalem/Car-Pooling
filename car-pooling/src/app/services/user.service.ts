import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


const passengerUrl = 'http://localhost:3000/passenger/';
const carUrl = 'http://localhost:3000/car/';
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


   public addCar(car): Observable<any> {
      return this.http.post(carUrl + 'create', {
        model: car.model,
        color : car.color,
        fuelType: car.fuelType,
        ICN : car.ICN,
        maxSeats: car.maxSeats,
        VKT: car.VKT,
        VIN: car.VIN,
        driverId: car.driverId
      }, httpOptions);
    }
  
  
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
  
  

  public setCurrentUser(user: any) {
    this.currentUser = [user.driver];
  }
  public getCurrentUser() {
    return this.currentUser;
  }
  
  }