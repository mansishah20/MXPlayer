import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:3000/api';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  signup(data: any): Observable<any> {
    return this.http.post(`${baseUrl}/signup`, data);
  }

  sigin(data: any): Observable<any> {
    return this.http.post(`${baseUrl}/signin`, data);
  }

}