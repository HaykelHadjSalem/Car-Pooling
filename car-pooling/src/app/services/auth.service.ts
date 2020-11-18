import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


const AUTH_API = 'http://localhost:3000/driver/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
 
  login(credentials): Observable<any> {
    return this.http.post(AUTH_API + 'login', {
      email: credentials.email,
      password: credentials.password
    }, httpOptions);
  }

  register(driver): Observable<any> {
    return this.http.post(AUTH_API + 'register', {
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

}
