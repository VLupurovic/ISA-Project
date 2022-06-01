import { Observable } from 'rxjs';
import { AdventureReservation } from './../models/adventure-reservation';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BoatReservation } from '../models/boat-reservation';
import { CabinReservation } from '../models/cabin-reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private baseURL = "http://localhost:8080/api/reservations"

  constructor(private httpClient: HttpClient) { }

  createAdventureReservation(reservation: AdventureReservation): Observable<AdventureReservation>{
    return this.httpClient.post<AdventureReservation>(`${this.baseURL}/adventures`, reservation);
  }

  createBoatReservation(reservation: BoatReservation): Observable<BoatReservation>{
    return this.httpClient.post<BoatReservation>(`${this.baseURL}/boats`, reservation);
  }

  createCabinReservation(reservation: CabinReservation): Observable<CabinReservation>{
    return this.httpClient.post<CabinReservation>(`${this.baseURL}/cabins`, reservation);
  }



  getUserAdventureReservations(id: number): Observable<AdventureReservation[]>{
    return this.httpClient.get<AdventureReservation[]>(`${this.baseURL}/adventures/${id}`);
  }

  getUserBoatReservations(id: number): Observable<BoatReservation[]>{
    return this.httpClient.get<BoatReservation[]>(`${this.baseURL}/boats/${id}`);
  }

  getUserCabinReservations(id: number): Observable<CabinReservation[]>{
    return this.httpClient.get<CabinReservation[]>(`${this.baseURL}/cabins/${id}`);
  }

  

  getUserPastAdventureReservations(id: number): Observable<AdventureReservation[]>{
    return this.httpClient.get<AdventureReservation[]>(`${this.baseURL}/history/adventures/${id}`);
  }

  getUserPastBoatReservations(id: number): Observable<BoatReservation[]>{
    return this.httpClient.get<BoatReservation[]>(`${this.baseURL}/history/boats/${id}`);
  }

  getUserPastCabinReservations(id: number): Observable<CabinReservation[]>{
    return this.httpClient.get<CabinReservation[]>(`${this.baseURL}/history/cabins/${id}`);
  }



  cancelAdventureReservation(id: number): Observable<void>{
    return this.httpClient.delete<void>(`${this.baseURL}/adventures/${id}`);
  }

  cancelBoatReservation(id: number): Observable<void>{
    return this.httpClient.delete<void>(`${this.baseURL}/boats/${id}`);
  }

  cancelCabinReservation(id: number): Observable<void>{
    return this.httpClient.delete<void>(`${this.baseURL}/cabins/${id}`);
  }



  getAdventureReservationById(id: number): Observable<AdventureReservation>{
    return this.httpClient.get<AdventureReservation>(`${this.baseURL}/adventure/${id}`)
  }

  getBoatReservationById(id: number): Observable<BoatReservation>{
    return this.httpClient.get<BoatReservation>(`${this.baseURL}/boat/${id}`)
  }

  getCabinReservationById(id: number): Observable<CabinReservation>{
    return this.httpClient.get<CabinReservation>(`${this.baseURL}/cabin/${id}`)
  }
}
