import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  postData(formData: any): Observable<any> {
    return this.http.post('http://localhost:8005/auth/signup', formData);
  }
}
