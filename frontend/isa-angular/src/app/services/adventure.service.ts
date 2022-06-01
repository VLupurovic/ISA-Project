import { AdventureReview } from './../models/adventure-review';
import { Adventure } from './../models/adventure';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdventureService {
  private baseURL = "http://localhost:8080/api/adventures"

  constructor(private httpClient: HttpClient) { }

  getAllAdventures(): Observable<Adventure[]>{
    return this.httpClient.get<Adventure[]>(`${this.baseURL}`)
  }

  getAdventureById(id: number): Observable<Adventure>{
    return this.httpClient.get<Adventure>(`${this.baseURL}/${id}`)
  }

  getAdventureFromTerm(id: number): Observable<Adventure>{
    return this.httpClient.get<Adventure>(`${this.baseURL}/term/${id}`)
  }



  createAdventureReview(review: AdventureReview): Observable<AdventureReview>{
    console.log("zzzzz")
    console.log(`${this.baseURL}/rate`)
    return this.httpClient.post<AdventureReview>(`${this.baseURL}/rate`, review)
  }
}
