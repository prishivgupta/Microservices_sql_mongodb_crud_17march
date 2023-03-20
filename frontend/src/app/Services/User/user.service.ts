import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { User } from 'src/app/Models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  // url of the json server
  baseUrl: string = "https://localhost:7006/gateway/user";

  // function to handle the error
  handleError(error: HttpErrorResponse) {
    if(error.error instanceof ErrorEvent) {
      console.error('An error message occured:', error.error.message);
    } else {
      console.error(error.error)
    }
    return throwError('Something happened, please try again');
  }

  // get all products service 

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl).pipe(catchError(this.handleError))
  }

  // get a particular product by id service

  getUserById(id: number): Observable<any> {
    return this.http.get<any>(this.baseUrl + `/${id}`).pipe(catchError(this.handleError))
  }

  // add an product service

  addUser(user: User): Observable<any> {
    return this.http.post<User>(this.baseUrl, user).pipe(catchError(this.handleError))
  }

  // update a particular product service

  updateUser(user: User): Observable<any> {
    return this.http.put<User>(this.baseUrl + `/${user.userId}`, user).pipe(catchError(this.handleError))
  }

  // delete an product service

  deleteUser(id: number): Observable<any> {
    return this.http.delete<any>(this.baseUrl + `/${id}`).pipe(catchError(this.handleError))
  }
}
