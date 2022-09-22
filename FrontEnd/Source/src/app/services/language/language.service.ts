import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Language } from '../../models/language/language.model';

const baseUrl = 'http://localhost:3000/api/language';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(private http: HttpClient) { }
  getOptions() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token' : localStorage.getItem("ACCESS_TOKEN") || ' ',
      })
    };
    return httpOptions;
  }
  getAll(): Observable<Language[]> {
    return this.http.get<Language[]>(baseUrl);
  }

  get(id: any): Observable<Language> {
    return this.http.get<Language>(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    const options = this.getOptions();
    return this.http.post(baseUrl, data, options);
  }

  update(id: any, data: any): Observable<any> {
    const options = this.getOptions();
    return this.http.put(`${baseUrl}/${id}`, data, options);
  }

  delete(id: any): Observable<any> {
    const options = this.getOptions();
    return this.http.delete(`${baseUrl}/${id}`, options);
  }

  deleteAll(): Observable<any> {
    const options = this.getOptions();
    return this.http.delete(baseUrl, options);
  }

  findByName(language_name: any): Observable<Language[]> {
    return this.http.get<Language[]>(`${baseUrl}?language_name=${language_name}`);
  }
}