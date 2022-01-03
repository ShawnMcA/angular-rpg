import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PlayerService {
  baseUri:string = 'http://localhost:3000/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  getPlayerData(): Observable<any> {
    return this.http.get(`${this.baseUri}/player/playerData`);
  }

  getPlayerAttacks(): Observable<any> {
    return this.http.get(`${this.baseUri}/player/playerAttacks`);
  }

  getPlayerInventory(): Observable<any> {
    return this.http.get(`${this.baseUri}/player/playerInventory`);
  }

  takeDamage(currentHp: number, damageTaken: number) {
    return currentHp -= damageTaken;
  }
}
