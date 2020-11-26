import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


const PassengerUrl = 'http://localhost:3000/passenger'
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

}
