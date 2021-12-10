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
}
