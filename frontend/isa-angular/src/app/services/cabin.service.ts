import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cabin } from '../models/cabin';
import { CabinOwner } from '../models/cabin-owner';
import { CabinOwnerReview } from '../models/cabin-owner-review';
import { CabinReview } from '../models/cabin-review';

@Injectable({
  providedIn: 'root'
})
export class CabinService {
  
  private baseURL = "http://localhost:8080/api/cabins"

  constructor(private httpClient: HttpClient) { }

  getAllCabins(): Observable<Cabin[]>{
    return this.httpClient.get<Cabin[]>(`${this.baseURL}`);
  }

  getCabinById(id: number): Observable<Cabin>{
    return this.httpClient.get<Cabin>(`${this.baseURL}/${id}`);
  }

  getOwnerById(id: number): Observable<CabinOwner>{
    return this.httpClient.get<CabinOwner>(`${this.baseURL}/owner/${id}`)
  }

  createCabinReview(review: CabinReview): Observable<CabinReview>{
    return this.httpClient.post<CabinReview>(`${this.baseURL}/rate`, review)
  }

  createCabinOwnerReview(review: CabinOwnerReview): Observable<CabinOwnerReview>{
    return this.httpClient.post<CabinOwnerReview>(`${this.baseURL}/rate/owner`, review)
  }
}
