import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Video } from '../../models/video/video.model';

const baseUrl = 'http://localhost:3000/api/video';
@Injectable({
  providedIn: 'root'
})
export class VideoService {

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
  getAll(): Observable<Video[]> {
    return this.http.get<Video[]>(baseUrl);
  }

  get(id: any): Observable<Video> {
    return this.http.get<Video>(`${baseUrl}/${id}`);
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

  findByName(video_name: any): Observable<Video[]> {
    return this.http.get<Video[]>(`${baseUrl}?video_name=${video_name}`);
  }
}