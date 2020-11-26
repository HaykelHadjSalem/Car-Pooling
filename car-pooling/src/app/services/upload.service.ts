import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UploadService {
  constructor(private _http: HttpClient) {}

  uploadImage(data : any): Observable<any> {
    console.log(data, "in the service");
    return this._http.post(
      'https://api.cloudinary.com/v1_1/rebootKamp/image/upload', data
    );
  }
  
}