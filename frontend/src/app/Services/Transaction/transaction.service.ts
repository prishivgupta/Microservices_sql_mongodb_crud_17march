import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Transaction } from 'src/app/Models/Transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient) { }

  // url of the json server
  baseUrl: string = "https://localhost:7006/gateway/transactions";

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

  getAllTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.baseUrl).pipe(catchError(this.handleError))
  }

  // get a particular product by id service

  getTransactionById(id: string): Observable<any> {
    return this.http.get<any>(this.baseUrl + `/${id}`).pipe(catchError(this.handleError))
  }

  // add an product service

  addTransaction(transaction: Transaction): Observable<any> {
    return this.http.post<Transaction>(this.baseUrl, transaction).pipe(catchError(this.handleError))
  }

  // update a particular product service

  updateTransaction(transaction: Transaction): Observable<any> {
    return this.http.put<Transaction>(this.baseUrl + `/${transaction.Id}`, transaction).pipe(catchError(this.handleError))
  }

  // delete an product service

  deleteTransaction(id: string): Observable<any> {
    return this.http.delete<any>(this.baseUrl + `/${id}`).pipe(catchError(this.handleError))
  }
}
