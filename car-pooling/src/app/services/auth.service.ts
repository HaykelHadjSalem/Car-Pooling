import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private passengerUrl = 'http://localhost:3000/api/passenger';
  constructor(private http: HttpClient) { }
  getAllPassengers() {
    return this.http.get(this.passengerUrl);
  }
}
