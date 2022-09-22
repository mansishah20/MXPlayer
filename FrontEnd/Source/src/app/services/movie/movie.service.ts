import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../../models/movie/movie.model';

const baseUrl = 'http://localhost:3000/api/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

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
  getAll(): Observable<Movie[]> {
    return this.http.get<Movie[]>(baseUrl);
  }

  get(id: any): Observable<Movie> {
    return this.http.get<Movie>(`${baseUrl}/${id}`);
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

  findByName(video_name: any): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${baseUrl}?video_name=${video_name}`);
  }

  getList(): Observable<any> {
    const options = this.getOptions();
    const userId = localStorage.getItem('userId');
    return this.http.get(`http://localhost:3000/api/activity?userId=${userId}`, options);
  }

}