import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FishingInstructor } from '../models/fishing-instructor';

@Injectable({
  providedIn: 'root'
})
export class InstructorService {
  private baseURL = "http://localhost:8080/api/instructors"

  constructor(private httpClient: HttpClient) { }

  getAllInstructors(): Observable<FishingInstructor[]>{
    return this.httpClient.get<FishingInstructor[]>(`${this.baseURL}`);
  }

  getInstructorById(id: string | null): Observable<FishingInstructor>{
    return this.httpClient.get<FishingInstructor>(`${this.baseURL}/${id}`);
  }
}
