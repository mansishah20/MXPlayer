import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category, Poster } from '../../models/category/category.model';

const baseUrl = 'http://localhost:3000/api/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

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
  getAll(): Observable<Category[]> {
    return this.http.get<Category[]>(baseUrl);
  }
  getPoster(): Observable<Poster[]> {
    return this.http.get<Poster[]>('http://mxplayer-2453-mansi-api.radixind.in/poster');
  }
  get(id: any): Observable<Category> {
    return this.http.get<Category>(`${baseUrl}/${id}`);
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

  findByName(category_name: any): Observable<Category[]> {
    return this.http.get<Category[]>(`${baseUrl}?category_name=${category_name}`);
  }
}