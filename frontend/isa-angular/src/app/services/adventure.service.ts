import { InstructorComplaint } from './../models/instructor-complaint';
import { AdventureComplaint } from './../models/adventure-complaint';
import { FishingInstructor } from './../models/fishing-instructor';
import { AdventureReview } from './../models/adventure-review';
import { Adventure } from './../models/adventure';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InstructorReview } from '../models/instructor-review';

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
    return this.httpClient.post<AdventureReview>(`${this.baseURL}/rate`, review)
  }

  createInstructorReview(review: InstructorReview): Observable<InstructorReview>{
    return this.httpClient.post<InstructorReview>(`${this.baseURL}/rate/instuctor`, review)
  }

  getInstructorById(id: number): Observable<FishingInstructor>{
    return this.httpClient.get<FishingInstructor>(`${this.baseURL}/instructor/${id}`)
  }



  createAdventureComplaint(complaint: AdventureComplaint): Observable<AdventureComplaint>{
    return this.httpClient.post<AdventureComplaint>(`${this.baseURL}/complaint`, complaint)
  }

  createInstructorComplaint(complaint: InstructorComplaint): Observable<InstructorComplaint>{
    return this.httpClient.post<InstructorComplaint>(`${this.baseURL}/complaint/instuctor`, complaint)
  }
}
