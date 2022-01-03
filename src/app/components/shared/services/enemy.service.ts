import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnemyService {
  baseUri:string = 'http://localhost:3000/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  getEnemyById(id: number): Observable<any> {
    return this.http.get(`${this.baseUri}/enemy/${id}`);
  }

  takeDamage(currentHp: number, damageTaken: number) {
    return currentHp -= damageTaken;
  }
}
