import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


const AUTH_DRIVER = 'http://localhost:3000/driver/';
const AUTH_PASSENGER = 'http://localhost:3000/passenger/';
const UPLOAD_IMAGE = 'http://localhost:3000/file/upload/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
 
  loginDriver(credentials): Observable<any> {
    return this.http.post(AUTH_DRIVER + 'login', {
      email: credentials.email,
      password: credentials.password
    }, httpOptions);
  }

  registerDriver(driver): Observable<any> {
    return this.http.post(AUTH_DRIVER + 'register', {
      firstName: driver.firstName,
      lastName : driver.lastName,
      email: driver.email,
      ICN : driver.ICN,
      address: driver.address,
      phoneNumber: driver.phoneNumber,
      password: driver.password,
      driverLicense: driver.driverLicense
    });
  }

  loginPassenger(credentials): Observable<any> {
    return this.http.post(AUTH_PASSENGER + 'login', {
      email: credentials.email,
      password: credentials.password
    }, httpOptions);
  }

  registerPassenger(passenger): Observable<any> {
    return this.http.post(AUTH_PASSENGER + 'register', {
      firstName: passenger.firstName,
      lastName : passenger.lastName,
      email: passenger.email,
      ICN : passenger.ICN,
      address: passenger.address,
      phoneNumber: passenger.phoneNumber,
      password: passenger.password,
    });
  }

  public uploadImage(userId: number, pic: any): Observable<any> {
    return  this.http.put(UPLOAD_IMAGE + userId, pic);
    }

}
