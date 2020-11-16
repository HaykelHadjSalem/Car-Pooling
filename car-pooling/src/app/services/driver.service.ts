import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  constructor(private http: HttpClient) { }
  
  public getDrivers() : Observable<any[]> {
   return  this.http.get<any[]>('http://localhost:3000/api/drivers')
     
}

}
