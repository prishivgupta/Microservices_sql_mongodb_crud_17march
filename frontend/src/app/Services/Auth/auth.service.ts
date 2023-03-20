import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from 'src/app/Models/Login';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private routes: Router) { }

  baseUrl: string = "https://localhost:7006/gateway/auth";

  login(data: Login): Observable<any> {
    return this.http.post<any>(this.baseUrl, data)
  }

  storeToken(token: string) {
    localStorage.setItem('token', token)
  }

  getToken() {
    return localStorage.getItem('token')
  }

  isLoggedIn(): boolean {
    return !! localStorage.getItem('token')
  }

  logout() {
    localStorage.clear();
    this.routes.navigate(['login'])
  }
}
