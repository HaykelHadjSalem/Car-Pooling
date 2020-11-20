import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class RideService {

  constructor(private http: HttpClient) { }



 getAllRides() {
   return this.http.get('http://localhost:3000/api/rides')
  }
  
}