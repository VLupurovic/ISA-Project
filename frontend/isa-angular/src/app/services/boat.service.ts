import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Boat } from '../models/boat';
import { BoatOwner } from '../models/boat-owner';
import { BoatReview } from '../models/boat-review';
import { BoatOwnerReview } from '../models/boat-owner-review';

@Injectable({
  providedIn: 'root'
})
export class BoatService {
  private baseURL = "http://localhost:8080/api/boats"

  constructor(private httpClient: HttpClient) { }

  getAllBoats(): Observable<Boat[]>{
    return this.httpClient.get<Boat[]>(`${this.baseURL}`);
  }

  getBoatById(id: number): Observable<Boat>{
    return this.httpClient.get<Boat>(`${this.baseURL}/${id}`);
  }

  getOwnerById(id: number): Observable<BoatOwner>{
    return this.httpClient.get<BoatOwner>(`${this.baseURL}/owner/${id}`)
  }

  createBoatReview(review: BoatReview): Observable<BoatReview>{
    return this.httpClient.post<BoatReview>(`${this.baseURL}/rate`, review)
  }

  createBoatOwnerReview(review: BoatOwnerReview): Observable<BoatOwnerReview>{
    return this.httpClient.post<BoatOwnerReview>(`${this.baseURL}/rate/owner`, review)
  }
}
