import { CabinOwnerComplaint } from './../models/cabin-owner-complaint';
import { CabinComplaint } from './../models/cabin-complaint';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cabin } from '../models/cabin';
import { CabinOwner } from '../models/cabin-owner';
import { CabinOwnerReview } from '../models/cabin-owner-review';
import { CabinReview } from '../models/cabin-review';
import { RegisteredUser } from '../models/registered-user';

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


  createCabinComplaint(complaint: CabinComplaint): Observable<CabinComplaint>{
    return this.httpClient.post<CabinComplaint>(`${this.baseURL}/complaint`, complaint)
  }

  createCabinOwnerComplaint(complaint: CabinOwnerComplaint): Observable<CabinOwnerComplaint>{
    return this.httpClient.post<CabinOwnerComplaint>(`${this.baseURL}/complaint/owner`, complaint)
  }

  subscribeToCabin(userId: number, cabinId: number){
    return this.httpClient.put<RegisteredUser>(`${this.baseURL}/subscribe/cabin/${userId}`, cabinId);
  }

  unsubscribeFromCabin(userId: number, cabinId: number){
    return this.httpClient.put<RegisteredUser>(`${this.baseURL}/unsubscribe/cabin/${userId}`, cabinId);
  }


  getUserCabinSubscriptions(id: number): Observable<Cabin[]>{
    return this.httpClient.get<Cabin[]>(`${this.baseURL}/subscriptions/${id}`)
  }
}
