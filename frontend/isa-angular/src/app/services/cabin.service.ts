import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cabin } from '../models/cabin';

@Injectable({
  providedIn: 'root'
})
export class CabinService {
  
  private baseURL = "http://localhost:8080/api/cabins"

  constructor(private httpClient: HttpClient) { }

  getAllCabins(): Observable<Cabin[]>{
    return this.httpClient.get<Cabin[]>(`${this.baseURL}`);
  }
}
