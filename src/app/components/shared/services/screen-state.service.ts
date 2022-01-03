import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { ScreenData } from '../interfaces/screen-data';

@Injectable({
  providedIn: 'root'
})
export class ScreenStateService {
  baseUri:string = 'http://localhost:3000/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  
  getScreenData(): Observable<any> {
    return this.http.get(`${this.baseUri}/screens`);
  }

  constructor(private http: HttpClient) {
  }
}
