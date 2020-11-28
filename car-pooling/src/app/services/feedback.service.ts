import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';



const FeedbackUrl = 'http://localhost:3000/feedback/'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http: HttpClient) { }

  public addFeedback(Feedback): Observable<any> {
    return this.http.post(FeedbackUrl + 'create', Feedback, httpOptions);
  }


  getFeedbackDriver(driverId: any): Observable<any>{
    return this.http.get(FeedbackUrl + 'driver/' + driverId, httpOptions);
  }

  getFeedbackPassenger(passengerId: any): Observable<any>{
    return this.http.get(FeedbackUrl + 'passenger/' + passengerId, httpOptions);
  }

}
