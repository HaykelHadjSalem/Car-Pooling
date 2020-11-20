import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const AUTH_Rides = 'http://localhost:3000/ride/';


@Injectable({
  providedIn: 'root'
})

export class RideService {

  constructor(private http: HttpClient) { }



 getAllRides() {
   return this.http.get(AUTH_Rides)
  }
  
  addRide(ride): Observable<any> {
    return this.http.post(AUTH_Rides + 'create', {
      departure: ride.departure,
      destination : ride.destination,
      price: ride.price,
      time : ride.time,
      seats: ride.seats,
      date: ride.date,
      driverId: ride.driverId,
      stop1: ride.stop1,
      stop2: ride.stop2,
      stop3: ride.stop3
    });
  }


}