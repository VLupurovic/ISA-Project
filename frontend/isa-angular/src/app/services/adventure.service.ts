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
    return this.httpClient.get<Adventure[]>(`${this.baseURL}`);
  }
}
