import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Boat } from '../models/boat';

@Injectable({
  providedIn: 'root'
})
export class BoatService {
  private baseURL = "http://localhost:8080/api/boats"

  constructor(private httpClient: HttpClient) { }

  getAllBoats(): Observable<Boat[]>{
    return this.httpClient.get<Boat[]>(`${this.baseURL}`);
  }

  getBoatById(id: string | null): Observable<Boat>{
    return this.httpClient.get<Boat>(`${this.baseURL}/${id}`);
  }
}
