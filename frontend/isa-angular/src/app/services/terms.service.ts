import { AdventureTerm } from '../models/adventure-term';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Adventure } from '../models/adventure';
import { CabinTerm } from '../models/cabin-term';
import { BoatTerm } from '../models/boat-term';

@Injectable({
  providedIn: 'root'
})
export class TermsService {
  private baseURL = "http://localhost:8080/api/terms"

  constructor(private httpClient: HttpClient) { }

  getAllAdventureTerms(): Observable<AdventureTerm[]>{
    return this.httpClient.get<AdventureTerm[]>(`${this.baseURL}/adventures`);
  }

  getAllCabinTerms(): Observable<CabinTerm[]>{
    return this.httpClient.get<CabinTerm[]>(`${this.baseURL}/cabins`);
  }

  getAllBoatTerms(): Observable<BoatTerm[]>{
    return this.httpClient.get<BoatTerm[]>(`${this.baseURL}/boats`);
  }

  getAdventureTermById(id: number): Observable<AdventureTerm>{
    return this.httpClient.get<AdventureTerm>(`${this.baseURL}/adventures/${id}`);
  }

  getBoatTermById(id: number): Observable<BoatTerm>{
    return this.httpClient.get<BoatTerm>(`${this.baseURL}/boats/${id}`);
  }

  getCabinTermById(id: number): Observable<CabinTerm>{
    return this.httpClient.get<CabinTerm>(`${this.baseURL}/cabins/${id}`);
  }


  //Promotions

  getAllAdventurePromos(): Observable<AdventureTerm[]>{
    return this.httpClient.get<AdventureTerm[]>(`${this.baseURL}/promotions/adventures`);
  }

  getAllCabinPromos(): Observable<CabinTerm[]>{
    return this.httpClient.get<CabinTerm[]>(`${this.baseURL}/promotions/cabins`);
  }

  getAllBoatPromos(): Observable<BoatTerm[]>{
    return this.httpClient.get<BoatTerm[]>(`${this.baseURL}/promotions/boats`);
  }
}
