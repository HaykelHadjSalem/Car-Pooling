import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

const carUrl = 'http://localhost:3000/car/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})

export class DriverService {

  currentDriver : any
  constructor(private http: HttpClient) { }
  
  public getCar() : Observable<any[]> {
   return  this.http.get<any[]>('http://localhost:3000/car')
     
}
getOneCar(driverId): Observable<any> {
  console.log(driverId)
  return this.http.get(carUrl + driverId , httpOptions);
}
}
