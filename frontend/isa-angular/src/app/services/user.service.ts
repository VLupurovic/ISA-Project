import { RegisteredUser } from './../models/registered-user';
import { LoginRequest } from './../models/login-request';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegistrationRequest } from '../models/registration-request';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseURL = "http://localhost:8080/api/users"

  constructor(private httpClient: HttpClient) { }

  register(request: RegistrationRequest): Observable<String>{
    return this.httpClient.post<String>(`${this.baseURL}`, request);
  }

  logIn(request: LoginRequest): Observable<RegisteredUser>{
    return this.httpClient.post<RegisteredUser>(`${this.baseURL}/login`, request);
  }

  update(user: RegisteredUser): Observable<RegisteredUser>{
    return this.httpClient.put<RegisteredUser>(`${this.baseURL}`, user);
  }

  createDeleteRequest(userId: number): Observable<void>{
    return this.httpClient.post<void>(`${this.baseURL}/delete`, userId);
  }

  getById(userId: number): Observable<RegisteredUser>{
    return this.httpClient.get<RegisteredUser>(`${this.baseURL}/${userId}`);
  }

  subscribeToAdventure(userId: number, adventureId: number){
    return this.httpClient.put<RegisteredUser>(`${this.baseURL}/subscribe/adventure/${userId}`, adventureId);
  }

  unsubscribeFromAdventure(userId: number, adventureId: number){
    return this.httpClient.put<RegisteredUser>(`${this.baseURL}/unsubscribe/adventure/${userId}`, adventureId);
  }

  subscribeToBoat(userId: number, boatId: number){
    return this.httpClient.put<RegisteredUser>(`${this.baseURL}/subscribe/boat/${userId}`, boatId);
  }

  unsubscribeFromBoat(userId: number, boatId: number){
    return this.httpClient.put<RegisteredUser>(`${this.baseURL}/unsubscribe/boat/${userId}`, boatId);
  }

  subscribeToCabin(userId: number, cabinId: number){
    return this.httpClient.put<RegisteredUser>(`${this.baseURL}/subscribe/cabin/${userId}`, cabinId);
  }

  unsubscribeFromCabin(userId: number, cabinId: number){
    return this.httpClient.put<RegisteredUser>(`${this.baseURL}/unsubscribe/cabin/${userId}`, cabinId);
  }
}


